const http = require('http');
const status=require('http-status');
const express = require('express');
const sequelize =require('./src/database/database');
const routes=require('./src/routes/routes');
const app=express();



app.use(express.json());
app.use('/',routes);
app.use((req,res,next)=>{
    res.status.apply(status.NOT_FOUND).send('Page not found');
})
app.use((req,res,next)=>{
    res.status.apply(status.INTERNAL_SERVER_ERROR).json({error});
})

sequelize.sync({force:false})
.then(()=>{
const port =3003;
app.set('port',port);
const server = http.createServer(app);
server.listen(port)
})



/*
app.use((req,res,next)=>{
    res.status.apply(status.NOT_FOUND).send('Page not found');
})

app.use((req,res,next)=>{
    res.status.apply(status.INTERNAL_SERVER_ERROR).send({error});
})

var server = app.listen(3003,()=>{
    var host=server.address().address;
    var port=server.address().port;
    console.log(`Servidor iniciado em http://${host}:${port}`);
})
*/