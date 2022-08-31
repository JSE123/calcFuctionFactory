function persona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.presentacion = function(){
        console.log("Hola mi nombre es: "+nombre+" "+apellido);

    }
}
//no funciona asi
persona.prototype.presentarse = function(){
    console.log("Hola mi nombre es: "+nombre+" "+apellido);
}


const manuel = new persona("Manuel", "Paíz");


manuel.presentacion();

