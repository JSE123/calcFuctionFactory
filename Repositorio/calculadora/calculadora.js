//variables
var valor1 = 0;
var signoAnt = "";

var resultado = document.getElementById("resultado");
var mrc = document.getElementById("mrc");
var mMenos = document.getElementById("mMenos");
var mMas = document.getElementById("mMas");
var entre = document.getElementById("entre");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var por = document.getElementById("por");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var menos = document.getElementById("menos");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var mas = document.getElementById("mas");
var cero = document.getElementById("cero");
var punto = document.getElementById("punto");
var reset = document.getElementById("reset");
var igual = document.getElementById("igual");


/*eventosif(resultado.textContent == ""){
        alert("error");
    }*/


    //coloca un cero al inicio 
    resultado.innerText = "0";
uno.onclick = function(e){
    console.log("hjkhldasfgvhjbwgf")
    if(resultado.textContent === "0"){
         resultado.textContent = "1";
    }else{
        resultado.textContent = resultado.textContent + "1";

    }
}
dos.onclick = function(e){
    if(resultado.textContent === "0"){
        resultado.textContent =  "2";

    }else{
        resultado.textContent = resultado.textContent + "2";

    }
}
tres.addEventListener("click", function(){
    if(resultado.textContent === "0"){
        resultado.innerText =  "3";

    }else{
        resultado.innerText = resultado.innerText + "3";

    }
})
cuatro.addEventListener("click", function(){
    if (resultado.textContent === "0"){
        resultado.innerText = "4";

    }else{
        resultado.innerText = resultado.innerText + "4";

    }
})
cinco.addEventListener("click", function(){
    if(resultado.textContent === "0"){
        resultado.innerText = "5";

    }else{
        resultado.innerText = resultado.innerText + "5";

    }
})
seis.addEventListener("click", function(){
    if(resultado.textContent === "0"){
        resultado.innerText =  "6";

    }else{
        resultado.innerText = resultado.innerText + "6";

    }
})
siete.addEventListener("click", function(){
    if(resultado.textContent === "0"){
        resultado.innerText =  "7";

    }else{
        resultado.innerText = resultado.innerText + "7";

    }
})
ocho.addEventListener("click", function(){
    if(resultado.textContent === "0"){
        resultado.innerText = "8";

    }else{
        resultado.innerText = resultado.innerText + "8";

    }
})
nueve.addEventListener("click", function(){
    if(resultado.textContent === "0"){
        resultado.innerText = "9";

    }else{
        resultado.innerText = resultado.innerText + "9";

    }
})
cero.addEventListener("click", function(){
    if(resultado.textContent === "0"){
        resultado.innerText = "0";

    }else{
        resultado.innerText = resultado.innerText + "0";

    }
})
punto.addEventListener("click", function(){
    if(resultado.textContent === "0"){
        resultado.innerText = "0.";
       
    }else{
        resultado.innerText = resultado.innerText + ".";

    }
})
reset.onclick = function(e){
   
    resultado.textContent =  "0";
    valor1 = 0;
}

mas.addEventListener("click", function(){
    if(signoAnt == "+" || signoAnt == ""){
        valor1 = valor1 + parseFloat(resultado.innerText);

    }else{
        resolverOperacion();
    }

    
    resultado.innerText = "0";
    signoAnt = "+";

})
menos.addEventListener("click", function(){
    if(signoAnt == "-" || signoAnt == ""){
        if(valor1 === 0){
            valor1 = parseFloat(resultado.innerText);
        }else{
            valor1 = valor1 - parseFloat(resultado.innerText);
        }
    }else{
        resolverOperacion();
    }
    resultado.innerText = "0";
    signoAnt = "-";

})

entre.addEventListener("click", function(){
    if(signoAnt == "/" || signoAnt == ""){
        if(valor1 === 0){
            valor1 = parseFloat(resultado.innerText);
    
        }else{
            valor1 = valor1 / parseFloat(resultado.innerText);
    
        }

    }else{
        resolverOperacion();
    }
    resultado.innerText = "0";
    signoAnt = "/";
    

})
por.addEventListener("click", function(){
    if(signoAnt == "*" || signoAnt == ""){
        if(valor1 === 0){
            valor1 = parseFloat(resultado.innerText);
    
        }else{
            valor1 = valor1 * parseFloat(resultado.innerText);
    
        }

    }else{
        resolverOperacion();
    }
    
    resultado.innerText = "0";
    signoAnt = "*";

})
igual.addEventListener("click", function(){
    resolverOperacion();
    resultado.innerText = valor1;
   
    signoAnt = "";
    valor1 = 0;
})

function resolverOperacion(){
    switch(signoAnt){
        case "+":
            valor1 = valor1 + parseFloat(resultado.innerText);
            break;
        case "-":
            valor1 = valor1 - parseFloat(resultado.innerText);   
            break;
        case "/":
            valor1 = valor1 / parseFloat(resultado.innerText);  
            break;
        case "*":
            valor1 = valor1 * parseFloat(resultado.innerText);  
            break;
        default:
            break;

    }
    resultado.innerText = "0";

}
