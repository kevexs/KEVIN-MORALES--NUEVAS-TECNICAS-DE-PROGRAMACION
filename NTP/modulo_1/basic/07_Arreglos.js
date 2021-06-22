/*
  CONCAT
*/

var numeros =[1, 2, 3, 4, 5]
var nuevonumeros = numeros.concat([6, 7, 8, 9 ,0])

//console.log(numeros)
//console.log(nuevosnumeros)

/*
   JOIN
*/
var nombre =["k", "e", "v", "i", "n"]
//console.log(nombre.join("-"));

/*
    SLICE
*/
console.log(nombre.slice(2));

/*
  INDEX OF
*/
//console.log(nombre.indexOf("a"));

/*
     Last index of

*/
//console.log(nombre.lastIndexOf(n));

/*
   Reverse
*/

//console.log(nombre.reverse());

/*
  Sort
*/
var numerosDesordenados = [2, 3, 6, 8, 9, 1, 2, 4]
//console.log(numeros.sort())

/*
   shift}
*/
//console.log(numeros.shift());
/*  
   Pop
*/
//consoles.log(numerosDesordenados.pop());
/*
  Push
*/
numerosDesordenados.push(1012)
console.log(numerosDesordenados);


//consultar funces de modificaciones de arreglos


var pares = [2, 4, 6, 8, 10]

//--------TAREA Nº2------

console.log(pares.map((element)=> elemento +1));

//consutar funciones de arreglos

//1.- FILTER
var filtrado = arreglo.filter(n => n < 10);
console.log(filtrado);

//2.-SOME
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];
const largeNum = array.some(num => num > 2);
console.log(largeNum);

const smallNum = array.some(num => num <= 2);
console.log(smallNum);

//3.- DELETE
var num = [1, 2, 3, 4, 5, 6,7, 8, 9, 10];
console.log('Hay: '+num.length+ ' numeros');

//4.- FOR EACH
 var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.forEach(item => {
    console.log(item);
});

//5.- UNSHIFT
 var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numeros.unshift([9,14,10])
console.log(num);

