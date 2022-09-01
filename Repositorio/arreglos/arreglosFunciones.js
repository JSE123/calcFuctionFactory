/*==================================
arreglo some.
verificar dado una tabla de datos de 
personas si hay mayores de edad
==================================*/

const persona = [
    {id:1, nombre:'juan', edad:22},
    {id:1, nombre:'José', edad:16},
    {id:1, nombre:'Pepe', edad:20},
    {id:1, nombre:'Toño', edad:13},
    {id:1, nombre:'Raúl', edad:11}
];


var p = persona.some(v => v.edad >= 18);
if(p){
    var p1 = persona.filter(v => v.edad >= 18);
    console.log(p1.nombre);
}else{
    console.log("No hay mayores de edad");
}