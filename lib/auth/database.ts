import { createPool, type Pool } from 'mysql2/promise'

let pool: Pool | undefined

export function getDatabasePool(): Pool {
  if (pool) return pool

  const socketPath = process.env.INSTANCE_UNIX_SOCKET
  const database = process.env.DB_NAME
  const user = process.env.DB_USER
  const password = process.env.DB_PASS

  if (!socketPath || !database || !user || !password) {
    throw new Error('Cloud SQL configuration is incomplete.')
  }

  pool = createPool({
    socketPath,
    database,
    user,
    password,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
    connectTimeout: 10_000,
    supportBigNumbers: true,
    bigNumberStrings: true,
    charset: 'utf8mb4',
  })

  return pool
}
