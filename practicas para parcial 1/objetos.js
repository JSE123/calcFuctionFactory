//------------CREACION DE OBJETOS--------------


/*========================
NOTACION DE OBJETO LITERAL
==========================*/

const Persona = {
    nombre: "Jose",
    apellido: "Silva",
    edad: 21,
    saludar: function(){//funcion anonima
        console.log("hola");
    }
}

// console.log(Persona.nombre);
// console.log(Persona.apellido);
// console.log(Persona.edad);
// Persona.saludar();


/*========================
OBJETO CONSTRUCTOR
==========================*/

function Person(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

const Jse = new Person("Jose", "Silva");

//console.log(Jse.nombre+" "+Jse.apellido);


/*========================
PROTOTYPE
==========================*/

function persona1(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.saludar = function(){
        console.log("Hola");
    }
}

const juan = new persona1("juan", "perez");

//console.log(persona1.prototype);


persona1.prototype.despedida = function(){
    return "adios";
}

persona1.prototype.apodo = "juanito";

// console.log(juan.apodo);


const pedro = new persona1("pedro", "juarez");

// console.log(pedro.apodo);


// console.log(persona1.prototype);
// console.log(Object.prototype)

// console.log(juan instanceof persona1);

function Estudiante(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;

}

Estudiante.prototype = persona1.prototype;

Estudiante.prototype.despedida = function(){
    return "Nos vemos!";
}

let miPersona = new persona1("Jorge", "Ramirez");
// console.log(miPersona.apellido);
// console.log(miPersona.nombre);

//miPersona.saludar();
// console.log(miPersona.despedida());

var manuel = new Estudiante("manuel", "paiz");
// manuel.despedida();


persona1.prototype.presentarse = function (){
    console.log("Mi nombre es: "+manuel.nombre+" "+manuel.apellido);
}

//manuel.presentarse();


/*========================
OBJECT.CREATE
==========================*/

function pokemon(nombre, tipo){
    this.nombre = nombre;
    this.tipo = tipo;

    this.presentars = function(){
        console.log("el nombre es: "+nombre+" "+tipo)
    }
}



function tipoFuego(nombre, tipo){
    pokemon.call(this, nombre, tipo);//llama al constructor de la superclase
}

tipoFuego.prototype =  Object.create(pokemon.prototype);
tipoFuego.prototype.constructor = tipoFuego;

console.log(tipoFuego.prototype);
console.log(pokemon.prototype);

const charizard = new tipoFuego("Charizard", "fuego");

console.log(charizard);
charizard.presentars();


console.log( charizard instanceof tipoFuego);

