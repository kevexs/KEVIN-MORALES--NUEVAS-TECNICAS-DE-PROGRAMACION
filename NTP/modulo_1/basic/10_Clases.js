// Como se hacia antes

function Rectangulo(base, atura){
    this.base = base
    this.altura = altura
}
Rectangulo.prototype.calcularArea = function(){
    return this.base * this.altura
    
}

var rectaangulo = new Rectangulo(6, 3)

console.log(rectangulo.calcularArea())
console.log(rectaangulo.base)

// Declaracion de clases

class Rectangulo2 {
    constructor(bese, altura){
        this.base = base
        this.altura = altura
    }
    calcularArea(){
        return this.bese * this.altura
    }
}

var rectangulo2 = new Rectangulo2(6, 3)

console.log(rectangulo2.calcularArea())

//implementar getters, setter y realizar una implementacion.
//implementar metodos - punto, Function distancia
//Contruir clase Persona y estudiante, extender Estudiante con persona



// -------------TAREA METODO ESTATICOS


/*
console.log("");
console.log("EJEMPLO");
class Perimetro {
    static PerimetroCadrado(lado) {
        peri = lado * 4

        var peri
        peri = lado *4
        return peri;
    }
}
var peri = Perimetro.PerimetroCadrado(lado);
console.log("Perimetro de un cuadrado es :",peri);
*/

//----------------TAREA GUETTERS Y SETTER------------------
/*
const estudiante = {
    Nombre: 'Kevin',
    Apellido: 'Morales',
    get nombre() {
        return this.Nombre + " " + this.Apellido;
    },
 
    set anios(num) {
        this_anio = (num)
    },
    get anios() {
        return this_anio
    }
};
console.log("Getter y setters");
console.log("Nombre:",estudiante.nombre);
console.log("Nombre :",estudiante.nombre);
Estudiante.anios = 20;
console.log("Años:",estudiante.anios);
*/

/*
------- EJERICIO FINAL ESPENTER ESTUDIANTE EN PERSONA
*/
/*
class Persona {
    constructor(Nombre, Apellido, edad ) {
      this.Nombres = {
        Nombre,
        Apellido
      };
      this.edad = edad;
      
    }
    Saludo() {
        console.log(`Hola! ${this.Nombres.Nombre}`);
    };
}

var persona = new Persona('Kevin', 'Morales', 20);
//persona.Saludo();

class Estudiante extends Persona {
    constructor(Nombre, Apellido, edad,  curso, ) {
        super(Nombre, Apellido, edad);
  
        this.curso = curso;
       
    }
  }

var estudiante = new Estudiante('Melanie', 'Bermeo', 17, 'Fenemino');
estudiante.Saludo();
*/