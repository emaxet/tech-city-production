module.exports = {
  production: {
    client: 'postgresql',
    debug: true,
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
    ssl: true
  }
}