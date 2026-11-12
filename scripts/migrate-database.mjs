import { readFile } from 'node:fs/promises'
import { createPool } from 'mysql2/promise'
import { loadEnvConfig } from '@next/env'

loadEnvConfig(process.cwd())

const socketPath = process.env.INSTANCE_UNIX_SOCKET?.trim()
const host = process.env.DB_HOST?.trim()
const database = process.env.DB_NAME
const user = process.env.DB_USER
const password = process.env.DB_PASS

if (!database || !user || !password) {
  throw new Error('Database configuration is incomplete.')
}

let connectionTarget
if (host) {
  const portValue = process.env.DB_PORT
  const port = portValue ? Number(portValue) : 3306
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('DB_PORT must be a valid TCP port.')
  }
  connectionTarget = { host, port }
} else if (socketPath) {
  connectionTarget = { socketPath }
} else {
  throw new Error('Configure either DB_HOST or INSTANCE_UNIX_SOCKET.')
}

const pool = createPool({
  ...connectionTarget,
  database,
  user,
  password,
  waitForConnections: true,
  connectionLimit: 1,
  connectTimeout: 10_000,
  charset: 'utf8mb4',
})

try {
  const schemaFiles = ['auth-schema.sql', 'referral-schema.sql', 'website-form-submissions-schema.sql']
  for (const schemaFile of schemaFiles) {
    const schema = await readFile(new URL(`../database/${schemaFile}`, import.meta.url), 'utf8')
    const statements = schema.split(';').map((statement) => statement.trim()).filter(Boolean)

    for (const statement of statements) {
      await pool.query(statement)
    }
  }

  console.log('Database schema migration complete.')
} finally {
  await pool.end()
}
