/*
  Funciones declarativas
  */

  //Retorno de valores
 function saludar(){
     return "Hola soy Kevin"
 }

 //funciones   void
 function saludar2(){
     console.log("Hola soy Wladimir");

 }
 //funciones con parametros

function saludarConParametros(nombre, apellido){
    return `Hola soy ${nombre} ${apellido}`
}

// funciones con parametros por defecto

function saludarConProfesion(nombre="Persona", profesion="Analisita de sistemas"){


    return `Hola ${nombre} mi profesion es ${profesion}`

}
 //console.log(saludarConProfesion("Kevin", "Desarrollador de software"));



// console.log(saludarConParametros("Kevin", "Morales"));}
 //saludar()
/*
var resultado = saludar()
consola.log(resultado);
consola.log(saludar());
*/
//saludar2()

/*
   FUNCIONES EXPRESIVAS
*/

var saludoConEdad = function(){
    return `Hola soy ${nombre} y tengo ${edad} año(s)`

}
//console.log(saludoConEdad("Kevin", 20));

/*
  ARROW FUNCTIONS - FUNCIONES FLECHA
*/

var saludoConApellido = (nombre, apellido) => `Hola soy ${nombre} ${apellido}`

var suma = (num1, num2) => num1 + num2

//console.log(saludoConApellido("Kevin", "Morales"));
//console.log(suma(2, 3));

/*
   FUNCIONES COMO PARAMETROS DE OTRAS FUNCIONES
*/

function saludoConFunciones(nombre, cb){
    return cb(nombre)
}

var miSaludo = saludoConFunciones("Kevin", function(nombre){
    return `Hola soy ${nombre}`
    //console.log(miSalud);

})
var miSaludo2 = saludoConFunciones("Kevin", (nombre) =>`Hola soy ${nombre}`)

//console.log(miSaludo2);

//setTimeout(()=>{
//  console.log("Hola mundo");
// }, 3000);

// setIntervarl(() =>{
//     console.log("Hola mundo");
// }, 2000);

