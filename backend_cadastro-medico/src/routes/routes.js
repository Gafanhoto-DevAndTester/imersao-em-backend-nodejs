const express = require('express');
const router = express.Router();
const MedicoController =require('../controllers/medicoController');

router.post('/medicos',MedicoController.Insert);
router.get('/medicos/:id',MedicoController.Select);
router.get('/medicos',MedicoController.SelectAll);
router.put('/medicos/:id',MedicoController.Update);
router.delete('/medicos/:id',MedicoController.SoftDelete);

module.exports=router;