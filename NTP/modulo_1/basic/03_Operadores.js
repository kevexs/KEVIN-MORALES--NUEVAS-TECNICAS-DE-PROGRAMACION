//Asignacion
//=

//Comparacion
/*
   ==
   ===
   console.log(2 ==2);
   console.log(2 === '2');
   console.log( 2 == '2');
*/
/*
   !=
console.log( 2 != 3);
*/
/*
   >
   <
   <=
   >=
*/

//Operadores de asignacion compuestos

/*
    += / x = x + y
    -= / x = x + y
    *= / x = x + y
    /= / x = x + y
    %= / x = x + y
    **= / x = x + y

 var numero = 3
 numero  +=2;
 console.log(numero);

 */

 //Operadores aritmeticos

 /*+
 +
 -
 *
 /
 %
 **
 */

 //Desestructurar objetos
  var  persona = { 
      nombre: "Kevin", 
      apellido: "Morales",
      edad: 20,
      viajes: {destino1: "colombia", destino2: "Mexico"}
    };

  var  { nombre2, apellido, viajes: {destino1} } = persona;

  console.log(persona);
  console.log(nombre2);
  console.log(apellido);
  console.log(destino1);