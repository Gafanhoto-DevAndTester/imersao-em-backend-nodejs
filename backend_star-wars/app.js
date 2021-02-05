const express =require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
app.use(express.json());
//router
const routes = require('./routes/index');
app.use('/',routes);

//server config
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE")
    res.header("Access-Control-Allow-Headers","X-PINGOTHER,Content-Type,Authorization")
    app.use(cors());
    next();
})

app.use(function(req,res,next){
if(req.url==='/favicon.ico'){
    res.writeHead(200,{'Content-Type':'image/x-icon'});
    res.end('');
}else{
    next();
}
});



//error handling
app.use(function(req,res,next){
var err = new Error('Not Found');
err.status=404;
next(err);
});
app.use(function(err,req,res,next){
    res.status(err.status||500).json({erro:err.message});// se status for 404 ou 500 apresentaremos um json em caso de erro. Esse json pode ser uma string que você definir
});

mongoose.connect('mongodb://localhost:27017/star_wars',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Conexão com o MongoDB realizada com sucesso!');
}).catch((err)=>{
    console.log("Conexão com o MongoDB não realizada com sucesso",err);
});

//server listener
module.exports =app;