const humano = (altura, peso) => {
    return {altura, peso}
}

const hombre = (altura,peso,nombre, edad) => {
    const {} = humano(altura,peso);
    return {altura,peso, nombre, edad};
}


const hombre1 = hombre(175,75,"nombre1",26);

console.log(hombre1.altura);

const mujer = (altura, peso, nombre, edad) => {
    const prototype = humano(altura, peso);
    return Object.assign({},prototype,{nombre,edad})
};

const mujer1 = mujer(160,58,"nombre1","23");

console.log(mujer1.altura);


//HERENCIA USANDO Object.assign

// const humano = (altura, peso) => {
//     const mostrar = () => console.log(`estatura: ${altura}, peso ${peso}`)
//     return {mostrar}
// }

// const hombre = (altura,peso,nombre, edad) => {
//     const {mostrar} = humano(altura,peso);
//     const mostrar1 = () => console.log(`algo`)
//     return {mostrar, mostrar1};
// }


// const hombre1 = hombre(175,75,"nombre1",26);

// // console.log(hombre1.altura);

// hombre1.mostrar();
const modulo = (function(){
    
});