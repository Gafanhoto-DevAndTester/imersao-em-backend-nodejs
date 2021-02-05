const Medico = require('../models/medico');
const status = require('http-status');

exports.Insert = (req,res,next)=>{
    const nome = req.body.nome;
    const crm = req.body.crm;
    const telefoneFixo = req.body.telefoneFixo;
    const celular = req.body.celular;

    Medico.create({
        nome:nome,
        crm:crm,
        telefoneFixo:telefoneFixo,
        celular:celular
    }).then(medico=>{
        if(medico){
            res.status(status.OK).send(medico);
        }else{
            res.status(status.NOT_FOUND).send();
        }
    }).catch(error=>next(error))
}

exports.Select=(req,res,next)=>{
    const id = req.params.id;

    Medico.findByPk(id)
    .then(medico=>{
        if(medico.id==id){
            res.status(status.OK).send(medico);
        }else{
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
}

exports.SelectAll=(req,res,next)=>{
    
    Medico.findAll()
    .then(medico=>{
        if(medico){
            res.status(status.OK).send(medico);
        }else{
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error=>next(error));
}

exports.Update=(req,res,next)=>{
    const id = req.params.id;

    const nome=req.body.nome;
    const crm=req.body.crm;
    const telefoneFixo=req.body.telefoneFixo;
    const celular=req.body.celular;

    Medico.findByPk(id)
    .then(medico => {

      if(medico.id==id){
          medico.update({
            nome:nome,
            crm:crm,
            telefoneFixo:telefoneFixo,
            celular:celular
        },
        {
            where:{id:id}
      })
      .then(()=>{
          res.status(status.OK).send();
      })
      .catch(error => next(error));
    }else{
      res.status(status.NOT_FOUND).send();
    }
  })
  .catch(error => next(error));
}

exports.SoftDelete = (req,res,next)=>{
    const id=req.params.id;

    Medico.findByPk(id)
    .then(medico=>{
        if(medico.id==id){
            medico.destroy({
                where:{id:id}
            })
            .then(()=>{
                res.status(status.OK).send();
            })
            .catch(error=>next(error))
        }else{
            res.status(status.NOT_FOUND).send()
        }
    })
    .catch(error=>next(error));
}