module.exports = {
    client: 'pg',
    debug: true,
    connection: DB_URL,
    migrations: {
        tableName: 'migrations'
    },
    ssl: true
}