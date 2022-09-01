const numeros = [1,4,19,22,12];

const suma = numeros.reduce((v1,v2,i) => v1+v2, 4);
console.log(suma);


const cadena = ['palabra','hola','nombre','s'];

const concatenacion = cadena.reduce((v1,v2,i) => v1+v2, 'hola2');

console.log(concatenacion);