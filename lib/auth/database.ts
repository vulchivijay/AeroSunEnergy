import { Pool } from 'pg'

let pool: Pool | undefined

export function getDatabasePool(): Pool {
  if (pool) return pool

  const connectionString = process.env.DATABASE_URL?.trim()
  if (!connectionString) {
    throw new Error('DATABASE_URL is required.')
  }

  let protocol: string
  try {
    protocol = new URL(connectionString).protocol
  } catch {
    throw new Error('DATABASE_URL must be a valid PostgreSQL connection URI.')
  }
  if (protocol !== 'postgres:' && protocol !== 'postgresql:') {
    throw new Error('DATABASE_URL must use the PostgreSQL protocol.')
  }

  pool = new Pool({
    connectionString,
    max: 5,
    connectionTimeoutMillis: 10_000,
    idleTimeoutMillis: 30_000,
  })

  pool.on('error', (error) => {
    console.error('Unexpected error from an idle database connection.', error)
  })

  return pool
}
