import { readFile } from 'node:fs/promises'
import { Pool } from 'pg'
import { loadEnvConfig } from '@next/env'

loadEnvConfig(process.cwd())

const databaseUrl = process.env.DATABASE_URL?.trim()
if (!databaseUrl) {
  throw new Error('DATABASE_URL is required.')
}

let targetUrl
try {
  targetUrl = new URL(databaseUrl)
} catch {
  throw new Error('DATABASE_URL must be a valid PostgreSQL connection URI.')
}

if (targetUrl.protocol !== 'postgres:' && targetUrl.protocol !== 'postgresql:') {
  throw new Error('DATABASE_URL must use the PostgreSQL protocol.')
}

const databaseName = decodeURIComponent(targetUrl.pathname.replace(/^\/+/, ''))
if (!databaseName) {
  throw new Error('DATABASE_URL must include a target database name.')
}

const schemaFiles = ['auth-schema.sql', 'referral-schema.sql', 'website-form-submissions-schema.sql']
const adminUrl = process.env.DATABASE_ADMIN_URL?.trim()
  ? new URL(process.env.DATABASE_ADMIN_URL)
  : new URL(targetUrl)

if (adminUrl.protocol !== 'postgres:' && adminUrl.protocol !== 'postgresql:') {
  throw new Error('DATABASE_ADMIN_URL must use the PostgreSQL protocol.')
}

if (!adminUrl.pathname || adminUrl.pathname === '/') {
  adminUrl.pathname = '/postgres'
} else if (!process.env.DATABASE_ADMIN_URL?.trim()) {
  adminUrl.pathname = '/postgres'
}

const adminPool = new Pool({ connectionString: adminUrl.toString(), max: 1 })
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

  migrationPool = new Pool({ connectionString: databaseUrl, max: 1 })
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
