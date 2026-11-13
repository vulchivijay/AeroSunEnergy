import { Pool } from 'pg'

let pool: Pool | undefined

export function getDatabasePool(): Pool {
  if (pool) return pool

  const host = process.env._DB_HOST?.trim()
  const database = process.env._DB_NAME?.trim()
  const user = process.env._DB_USER?.trim()
  const password = process.env._DB_PASSWORD
  const portValue = process.env._DB_PORT?.trim()
  const port = portValue ? Number(portValue) : 5432
  const sslValue = (process.env._DB_SSL ?? 'true').trim().toLowerCase()

  if (!host || !database || !user || !password) {
    throw new Error('_DB_HOST, _DB_NAME, _DB_USER, and _DB_PASSWORD are required.')
  }
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('_DB_PORT must be a valid TCP port.')
  }
  if (sslValue !== 'true' && sslValue !== 'false') {
    throw new Error('_DB_SSL must be "true" or "false".')
  }

  pool = new Pool({
    host,
    port,
    database,
    user,
    password,
    ssl: sslValue === 'true',
    max: 5,
    connectionTimeoutMillis: 10_000,
    idleTimeoutMillis: 30_000,
  })

  pool.on('error', (error) => {
    console.error('Unexpected error from an idle database connection.', error)
  })

  return pool
}
