//Funcionalidad de Express
const {Router} = require("express");
const router = Router();

const apiroute = '/api'
const tiquetes =  require('../controllers/tiquetes_controllers')

router.get(apiroute+'/tiquetes',tiquetes.listar)
router.post(apiroute+'/tiquetes',tiquetes.guardaregistro)

module.exports=router