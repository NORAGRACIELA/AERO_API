//Importar Libreria Express
const { Router } = require('express');
const express = require('express');

//Importa Libreria Morgan+
const morgan = require('morgan');
const cors = require('cors');

//Usar Libreria express
const app = express();
const port = 3000;
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(require("./routers/routers"))
app.listen(port, ()=>{
    console.log(`corriendo por el puerto ${port} y en localhost`);
})