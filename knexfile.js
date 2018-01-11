module.exports = {
  production: {
    client: 'pg',
    debug: true,
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'migrations'
    },
    ssl: true
  }
}