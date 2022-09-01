const persona = {
    nombre: '',
    apellido: '',
    presentarse: () => console.log(`Mi nombre es ${this.nombre}, mi apellido es ${this.apellido} y mi edad es: ${this.edad}`),
    presentacion1: function (){
        // console.log("Mi nombre es: "+this.nombre);
        console.log(`Mi nombre es ${this.nombre}, mi apellido es ${this.apellido} y mi edad es: ${this.edad}`);
    }
}

const yo = Object.create(persona);

yo.nombre = 'Jose';
yo.apellido = 'Paiz';
yo.edad = 21;
// yo.presentarse();
yo.presentacion1();

// const person = {
//     isHuman: false,
//     printIntroduction: function() {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
//   };
  
//   const me = Object.create(person);
  
//   me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
//   me.isHuman = true; // inherited properties can be overwritten
  
//   me.printIntroduction();
//   expected output: "My name is Matthew. Am I human? true"
  
