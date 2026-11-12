import { randomBytes, scrypt, timingSafeEqual } from 'node:crypto'

const KEY_LENGTH = 64
const COST = 32_768
const BLOCK_SIZE = 8
const PARALLELIZATION = 1
const MAX_MEMORY = 64 * 1024 * 1024

function deriveKey(password: string, salt: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    scrypt(
      password,
      salt,
      KEY_LENGTH,
      { N: COST, r: BLOCK_SIZE, p: PARALLELIZATION, maxmem: MAX_MEMORY },
      (error, key) => {
        if (error) {
          reject(error)
          return
        }
        resolve(key)
      },
    )
  })
}

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16)
  const key = await deriveKey(password, salt)
  return `scrypt$${COST}$${BLOCK_SIZE}$${PARALLELIZATION}$${salt.toString('base64url')}$${key.toString('base64url')}`
}

export async function verifyPassword(password: string, encodedHash: string): Promise<boolean> {
  const [algorithm, cost, blockSize, parallelization, encodedSalt, encodedKey] = encodedHash.split('$')
  if (
    algorithm !== 'scrypt' ||
    cost !== String(COST) ||
    blockSize !== String(BLOCK_SIZE) ||
    parallelization !== String(PARALLELIZATION) ||
    !encodedSalt ||
    !encodedKey
  ) {
    return false
  }

  const salt = Buffer.from(encodedSalt, 'base64url')
  const expectedKey = Buffer.from(encodedKey, 'base64url')
  if (salt.length !== 16 || expectedKey.length !== KEY_LENGTH) return false

  const actualKey = await deriveKey(password, salt)
  return timingSafeEqual(actualKey, expectedKey)
}
