import { readFile } from 'node:fs/promises'
import { Pool } from 'pg'
import { loadEnvConfig } from '@next/env'

loadEnvConfig(process.cwd())

const host = process.env._DB_HOST?.trim()
const databaseName = process.env._DB_NAME?.trim()
const user = process.env._DB_USER?.trim()
const password = process.env._DB_PASSWORD
const portValue = process.env._DB_PORT?.trim()
const port = portValue ? Number(portValue) : 5432
const sslValue = (process.env._DB_SSL ?? 'true').trim().toLowerCase()
const adminUser = process.env._DB_ADMIN_USER?.trim()
const adminPassword = process.env._DB_ADMIN_PASSWORD

if (!host || !databaseName || !user || !password) {
  throw new Error('_DB_HOST, _DB_NAME, _DB_USER, and _DB_PASSWORD are required.')
}
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('_DB_PORT must be a valid TCP port.')
}
if (sslValue !== 'true' && sslValue !== 'false') {
  throw new Error('_DB_SSL must be "true" or "false".')
}
if (Boolean(adminUser) !== Boolean(adminPassword)) {
  throw new Error('Set both _DB_ADMIN_USER and _DB_ADMIN_PASSWORD, or leave both unset.')
}

const schemaFiles = ['auth-schema.sql', 'referral-schema.sql', 'website-form-submissions-schema.sql']
const connectionOptions = { host, port, ssl: sslValue === 'true' }
const adminPool = new Pool({
  ...connectionOptions,
  database: 'postgres',
  user: adminUser || user,
  password: adminUser ? adminPassword : password,
  max: 1,
})
let migrationPool

try {
  if (databaseName !== 'postgres') {
    const { rows } = await adminPool.query(
      'SELECT EXISTS (SELECT 1 FROM pg_database WHERE datname = $1) AS exists',
      [databaseName],
    )
    if (!rows[0]?.exists) {
      const quotedDatabaseName = `"${databaseName.replaceAll('"', '""')}"`
      await adminPool.query(`CREATE DATABASE ${quotedDatabaseName}`)
      console.log(`Created PostgreSQL database "${databaseName}".`)
    }
  }

  migrationPool = new Pool({
    ...connectionOptions,
    database: databaseName,
    user,
    password,
    max: 1,
  })
  const client = await migrationPool.connect()
  let transactionStarted = false
  try {
    await client.query('BEGIN')
    transactionStarted = true
    for (const schemaFile of schemaFiles) {
      const schema = await readFile(new URL(`../database/${schemaFile}`, import.meta.url), 'utf8')
      await client.query(schema)
    }
    await client.query('COMMIT')
    transactionStarted = false
  } catch (error) {
    if (transactionStarted) {
      try {
        await client.query('ROLLBACK')
      } catch (rollbackError) {
        console.error('PostgreSQL schema migration rollback failed.', rollbackError)
      }
    }
    throw error
  } finally {
    client.release()
  }

  console.log('PostgreSQL database schema migration complete.')
} finally {
  if (migrationPool) await migrationPool.end()
  await adminPool.end()
}
