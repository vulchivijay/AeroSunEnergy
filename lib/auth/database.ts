import { MongoClient, ObjectId, type Db, type Document } from 'mongodb'

export interface AuthUserDocument extends Document {
  _id: ObjectId
  name: string
  email: string
  password_hash: string
  role?: 'admin' | 'operator' | 'monitor'
  approved?: boolean
  created_at: Date
}

export interface AuthSessionDocument extends Document {
  _id: ObjectId
  user_id: ObjectId
  token_hash: string
  expires_at: Date
  created_at: Date
}

export type WebsiteFormSubmissionValue = string | number | boolean | string[]

export interface WebsiteFormSubmissionDocument extends Document {
  _id: ObjectId
  reference_code: string
  form_type: string
  payload: Record<string, WebsiteFormSubmissionValue>
  status: string
  created_at: Date
  updated_at: Date
}

let databasePromise: Promise<Db> | undefined

async function connectDatabase(): Promise<Db> {
  const uri = process.env._MONGODB_URI?.trim()
  const databaseName = process.env._MONGODB_DB?.trim()
  if (!uri || !databaseName) {
    throw new Error('_MONGODB_URI and _MONGODB_DB are required.')
  }

  const client = new MongoClient(uri, {
    maxPoolSize: 5,
    serverSelectionTimeoutMS: 10_000,
  })

  try {
    await client.connect()
    const database = client.db(databaseName)
    await Promise.all([
      database.collection('auth_users').createIndex({ email: 1 }, { unique: true, name: 'uq_auth_users_email' }),
      database.collection('auth_sessions').createIndex({ token_hash: 1 }, { unique: true, name: 'uq_auth_sessions_token_hash' }),
      database.collection('auth_sessions').createIndex({ expires_at: 1 }, { name: 'ix_auth_sessions_expires_at' }),
      database.collection('solar_referrals').createIndex({ reference_code: 1 }, { unique: true, name: 'uq_solar_referrals_reference_code' }),
      database.collection('solar_referrals').createIndex({ status: 1, created_at: -1 }, { name: 'ix_solar_referrals_status_created_at' }),
      database.collection('website_form_submissions').createIndex({ reference_code: 1 }, { unique: true, name: 'uq_website_form_submissions_reference_code' }),
      database.collection('website_form_submissions').createIndex({ form_type: 1, status: 1, created_at: -1 }, { name: 'ix_website_form_submissions_type_status_created' }),
    ])
    return database
  } catch (error) {
    await client.close()
    throw error
  }
}

export function getDatabase(): Promise<Db> {
  if (!databasePromise) {
    databasePromise = connectDatabase().catch((error: unknown) => {
      databasePromise = undefined
      throw error
    })
  }
  return databasePromise
}
