//traemos el paquete
const { Router } = require('express');

//inicializamos ROUTER
const router = Router()

//traer data
const data = require('../data.json')
//creacion de los entpoint
router.get("/", (req, res =>{
    res.send("Hola mundo conexpress ")
}))


.get("/users", (req, res) =>{
    res.json({
        msg:"Lista de usuarios body:data"
    })
})
get("/saludo", (req, res) =>{
    const{
        query: {nombre,
        apellido},
    } = req;
    res.json({
        saludo: "mundo",
        nombre: nombre,
        apellido: apellido,
    });
    })
.get("/saludo/:nombre",(req, res) =>{
    const{params: {nombre}
}=resq;
res.json({
    saludo: "mundo",
    nombre: nombre,
})

})
// Exportamos rutas
module.exports.RouterIndex = router;
/
