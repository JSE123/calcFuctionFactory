const array = [1, 2, 3, 4, 5];

// checks whether an element is even
//const even = (element) =C element % 2 === 0;

//console.log(array.some(even));
// expected output: true

const arreglo = [1,2,3,4,5,-2,-3];

const v = arreglo.some(function(valor){
    return valor = 0;
});



console.log(v);


const arr = ['hola', 'que', 'tal'];

const palabra = arr.some(valor => valor == 'zz');

console.log(palabra);
if(palabra){
    console.log(arr);

}else{
    console.log("No existe en el arreglo")
}


