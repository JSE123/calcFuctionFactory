const personFactory = (nombre, apellido) => {
    return {nombre, apellido}
}

const jeff = personFactory("jeff", "howard");
console.log(jeff.nombre)