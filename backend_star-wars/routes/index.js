const { response } = require('express');

var express = require('express'),
router = express.Router();

const mongoose = require('mongoose');
var Stormtrooper = require('../models/stormtroopers');


router.get('/stormtroopers',async(req,res)=>{
    await Stormtrooper.find({}).then((stormtroopers)=>{
        return res.json({
            error:false,
            stormtroopers
        })
    }).catch((err)=>{
        return res.status(400).json({
            error:true,
            message:"Nenhum registro encontrado!"
        })
    })
});

router.post('/stormtroopers',async(req,res)=>{
    await sleep(3000);
    function sleep(ms){
        return new Promise((resolve)=>{
            setTimeout(resolve,ms);
        })
    }
    await Stormtrooper.create(req.body,(err)=>{
        if(err)return res.status(400).json({
            error:true,
            message:"Erro: Stormtrooper não registrado com sucesso!"
        })
    })
    return res.json({
        error:false,
        message:"Stormtrooper registrado com sucesso!"
    });
});





module.exports = router;

/*
router.get('/',function(req,res){
    res.status(201);
    res.json({'name':'Roberto Santos','email':'jos.rbsantos@gmail.com'
    });
});

router.post('/',function(req,res,next){
    res.send({text:req.body.text});
})
*/
