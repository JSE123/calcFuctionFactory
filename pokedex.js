/*Ejercicio
Modifica el código visto en clase, y crea un archivo llamado pokedex.js y dentro crea
un objeto Pokemon cuyo constructor se inicialice con el nombre del pokemon, su
nickname, y el tipo. Dentro asigna esas propiedades. Create otros 3 objetos de tipos
diferentes y lista sus debilidades.
Luego create una clase de un pokemon específico de cada tipo y que este tenga la
cadena de herencia antes mencionada y lista los ataques disponibles de los 3
pokemon.
Crea un repositorio en Github que se llame pokedex y sincronizalo que tu trabajo
realizado. Envía tu enlace de repositorio en el apartado de entrega que estará
disponible.*/
// // function Pokemon(nombre, nickname, tipo){
// //     this.nombre = nombre;
// //     this.nickname = nickname;
// //     this.tipo = tipo;
// // }
function Pokemon(nombre, nickname, tipo){
    this.nombre = nombre;
    this.nickname = nickname;
    this.tipo = tipo;
}

function pokemonDbilidad1(debilidad1){
    this.debilidad1 = debilidad1;
}

function pokemonDbilidad1(debilidad2){
    this.debilidad2 = debilidad2;
}

function pokemonDbilidad1(debilidad3){
    this.debilidad3 = debilidad3;
}
// function Pokemon(nombre, tipo){
//     this.nombre = nombre;
//     this.tipo = tipo;
// }

//clase que hereda de pokemon
function TipoFuego(nombre, nickname, ataque1, ataque2, ataque3){
    Pokemon.call(this, nombre, nickname, "Fuego");
    this.ataque1 = ataque1;
    this.ataque2 = ataque2;
    this.ataque3 = ataque3;

function TipoAgua(nombre, nickname, ataque1, ataque2, ataque3){
    Pokemon.call(this, nombre, nickname, "Agua");
    this.ataque1 = ataque1;
    this.ataque2 = ataque2;
    this.ataque3 = ataque3;
}
function TipoTierra(nombre, nickname,  ataque1, ataque2, ataque3){
    Pokemon.call(this, nombre, nickname, "Tierra");
    this.ataque1 = ataque1;
    this.ataque2 = ataque2;
    this.ataque3 = ataque3;
}
function TipoElectricidad(nombre, nickname,  ataque1, ataque2, ataque3){
    Pokemon.call(this, nombre, nickname, "Electricidad");
    this.ataque1 = ataque1;
    this.ataque2 = ataque2;
    this.ataque3 = ataque3;
}

TipoFuego.prototype = Object.create(Pokemon.prototype);
TipoFuego.prototype.constructor = TipoFuego;

TipoAgua.prototype = Object.create(Pokemon.prototype);
TipoAgua.prototype.constructor = TipoAgua;

TipoTierra.prototype = Object.create(Pokemon.prototype);
TipoTierra.prototype.constructor = TipoTierra;

TipoElectricidad.prototype = Object.create(Pokemon.prototype);
TipoElectricidad.prototype.constructor = TipoElectricidad;



console.log(TipoFuego.prototype);

// const charizard = new Pokemon("charizard","cha", "fuego")
const charizard = new TipoFuego("charizard","Cha","debilidadataque", "ataque 2","ataque 3")
const squirtle = new TipoAgua("squirtle","sq","ataque1", "ataque 2","ataque 3")
const digglet = new TipoTierra("digglet","di","ataque1", "ataque 2","ataque 3")
const pikachu = new TipoElectricidad("Pikachu","pika","ataque1", "ataque 2","ataque 3")

 
console.log(charizard);



