import { readFile } from 'node:fs/promises'
import { createPool } from 'mysql2/promise'
import { loadEnvConfig } from '@next/env'

loadEnvConfig(process.cwd())

const required = {
  socketPath: process.env.INSTANCE_UNIX_SOCKET,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
}

if (Object.values(required).some((value) => !value)) {
  throw new Error('Cloud SQL configuration is incomplete.')
}

const pool = createPool({
  ...required,
  waitForConnections: true,
  connectionLimit: 1,
  connectTimeout: 10_000,
  charset: 'utf8mb4',
})

try {
  const schema = await readFile(new URL('../database/auth-schema.sql', import.meta.url), 'utf8')
  const statements = schema.split(';').map((statement) => statement.trim()).filter(Boolean)

  for (const statement of statements) {
    await pool.query(statement)
  }

  console.log('Auth schema migration complete.')
} finally {
  await pool.end()
}
