/*
   Promesas
*/

function promesa(bandera){
    return new promise((resolve, reject)=>{
        if(bandera){

        setTimeout(() => {
            resolve("peticion resuelta");
        }, 3000);
    }else{
        setTimeout(() => {
       
        reject("La operacion fallo")
    }, 2000);
    }
    })  
}

/*
promesa(false)
.then((resultado) => {
    console.log("Respuesta positiva", resultado)
})
.catch((error) =>{
    console.log("Error", error);
})
*/

var segundaPromesa = (bandera) =>  new promise((resolve, reject) => {
    if(bandera){

        setTimeout(() => {
            resolve("peticion resuelta");
        }, 3000);
    }else{
        setTimeout(() => {
       
        reject("La operacion fallo")
    }, 2000);
    }
    })  

    segundaPromesa(true)
        .then((respuesta)=>{
            console.log(restuesta);
        })
        .catch((error)=>{
            console.log(error);

        })

var listaDePersonas; 
promesa(ture)//peticion de clientes
    .then((respuesta)=>{//respuesta de lista de clientes
       console.log(respuesta)
       return segundaPromesa(true)//compras del cliente
    })
       .then((respuesta)=>{//respuesta de la segunda promesa
           console.log(respuesta);
       })
    .catch((error)=>{
        console.log(error)
    })