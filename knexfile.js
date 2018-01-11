module.exports = {
    client: 'pg',
    debug: true,
    connection: DATABASE_URL
    migrations: {
        tableName: 'migrations'
    },
    ssl: true
}