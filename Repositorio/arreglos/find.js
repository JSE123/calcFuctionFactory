const ciudades = ['San Miguel', 'Chinameca', 'Jucuapa'];

const ciudad = ciudades.find(v => v == "San Miguel");

if(ciudad){
    console.log(ciudad);
    
}else{
    console.log("No existe en el arreglo");

}
