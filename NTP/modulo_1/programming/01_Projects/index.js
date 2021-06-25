const { Router } = require('express');
const express = require('express');
//Genero una aplicacion express
const app = express()
//router
const {RouterIndex}=require('routes/index')

    app.user('/RouterIndex')
    //app.user('/user'. RouterIndex)
    //app.user('/user/data'. RouterIndex)
    //app.user('/user'. RouterIndex)
app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
    
})