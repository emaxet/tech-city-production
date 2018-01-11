module.exports = {
    client: 'pg',
    debug: true,
    connection: postgres://esglnrafgeryxp:a489ea2cc0020af18128336f1ad5fba8ee4cd3af6d18eace835ecf3355c6ee40@ec2-54-227-250-33.compute-1.amazonaws.com:5432/d3k27p2697l6tg,
    migrations: {
        tableName: 'migrations'
    },
    ssl: true
}