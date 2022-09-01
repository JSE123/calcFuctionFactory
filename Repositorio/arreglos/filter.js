let comida = [
    {id:1, nombre:"Hamburguesa", precio:1.99},
    {id:2, nombre:"Pizza", precio:4.99},
    {id:3, nombre:"Tacos", precio:2.3},
    {id:4, nombre:"Comida china", precio:3.5}
]

const m = comida.filter(v => v.precio <= 2);


if(m){
    console.log(m);
}else{
    console.log("No te alcanza para nada");
    
}