const titulo = document.getElementById('titulo');
const btnCambioTitulo = document.getElementById('btnCambioTitulo');


btnCambioTitulo.addEventListener('click', cambiarTitulo);

function cambiarTitulo() {
    if(titulo.textContent == 'hola tu'){
        titulo.textContent = 'hola usted';
    }else{
        titulo.textContent = 'hola tu';
    }
};


