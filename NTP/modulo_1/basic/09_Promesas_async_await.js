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

(async() => {
    try{
    var respuesta = await promesa(true) 
    var respuesta2 = await promesa(true) 
    console.log(respuesta);
    console.log(respuesta2);
    }catch (error){
        console.log(error);
    }
})()