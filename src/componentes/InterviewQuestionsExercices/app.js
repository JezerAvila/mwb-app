const titulo = document.getElementById('titulo');
const btnCambiarTexto = document.getElementById('cambiarTexto');

btnCambiarTexto.addEventListener('click', function(){
    if(titulo.textContent=='Hola, usuario!'){
        titulo.textContent = '¡Bienvenido a la página!';

    }else{
        titulo.textContent = 'Hola, usuario!';
    }
});


// Alternativa con funcion nombrada en vez de anonima:
function alternarTexto() {
    if (titulo.textContent === 'Hola, usuario!') {
        titulo.textContent = '¡Bienvenido a la página!';
    } else {
        titulo.textContent = 'Hola, usuario!';
    }
}

btnCambiarTexto.addEventListener('click', alternarTexto);




