//Crear un objeto libro con la notacion  de constructor. Debe tener un titulo, autor, numero de paginas, y si esta leido o no.
//Debe contener un metodo llamado infoLibro que me de toda la informacion del libro creado y si ya fue leido.

function Libro(titulo, autor, nPaginas, estado){
    this.titulo = titulo;
    this.autor = autor;
    this.nPaginas = nPaginas;
    this.estado = estado;
    this.infoLibro = function(){
        console.log('Titulo: '+titulo+', Autor: '+autor+', Numero de paginas: '+nPaginas+', Estado: '+estado);

    }
    

}

const libro1 = new Libro("titulo1", "autor1","5000","leido");

console.log(libro1.autor);
libro1.infoLibro();

let libro2 = new Libro("Eclava de la libertad","ILDEFONSO FALCONES","457", "No leido");

libro2.infoLibro();

