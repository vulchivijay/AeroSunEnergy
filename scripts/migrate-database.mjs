import { MongoClient } from 'mongodb'
import { loadEnvConfig } from '@next/env'

loadEnvConfig(process.cwd())

const uri = process.env.MONGODB_URI?.trim()
const databaseName = process.env.MONGODB_DB?.trim()

if (!uri || !databaseName) {
  throw new Error('MONGODB_URI and MONGODB_DB are required.')
}

const client = new MongoClient(uri, {
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
  console.log('MongoDB collections and indexes are ready.')
} finally {
  await client.close()
}
