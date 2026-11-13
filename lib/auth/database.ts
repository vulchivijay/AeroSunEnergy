import { createPool, type Pool } from 'mysql2/promise'

let pool: Pool | undefined

export function getDatabasePool(): Pool {
  if (pool) return pool

  const socketPath = process.env._INSTANCE_UNIX_SOCKET?.trim()
  const host = process.env.DB_HOST?.trim()
  const database = process.env._DB_NAME
  const user = process.env._DB_USER
  const password = process.env._DB_PASS

  if (!database || !user || !password) {
    throw new Error('Database configuration is incomplete.')
  }

  let connectionTarget: { socketPath: string } | { host: string; port: number }
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
    throw new Error('Configure either DB_HOST or _INSTANCE_UNIX_SOCKET.')
  }

  pool = createPool({
    ...connectionTarget,
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
