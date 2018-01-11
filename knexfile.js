module.exports = {
    client: 'pg',
    debug: true,
    connection: process.env.DATABASE_URL,
    migrations: {
        tableName: 'db/migrations'
    },
    ssl: true
}