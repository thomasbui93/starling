require('dotenv').config();

const config = (isDev = true) => ({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: isDev ? false: {
      rejectUnauthorized: false
    }
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
})

module.exports = {
  development: config(),
  ci: config(),
  production: config(false)
};
