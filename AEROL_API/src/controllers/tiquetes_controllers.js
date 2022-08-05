const tiquetes_controllers = {}

const tiquetes = require("../tiquetes.json")

tiquetes_controllers.listar=(request,response) => {
    response.json(tiquetes)
}

tiquetes_controllers.guardaregistro=(request,response) =>{
    const id=tiquetes.length+1
    const datos=request.body
    datos["Id"]=id
    tiquetes.push(datos)
    response.json({datos})
}


module.exports=tiquetes_controllers