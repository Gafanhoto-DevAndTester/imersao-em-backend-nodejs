//string de conexão
module.exports={
    development:{
        database:{
            host:'localhost',
            port:3306,
            name:'cadastros',
            dialect:'mysql',
            user:'root',
            password:'BombARelogio10#',
        }
    },
    production:{
        database:{
            host:process.env.DB_HOST,
            port:process.env.DB_PORT
        }
    }
}