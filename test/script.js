document.addEventListener('DOMContentLoaded', function() {
    const buscarBtn = document.getElementById('buscar');
    const nombreInput = document.getElementById('nombre');
    
    buscarBtn.addEventListener('click', function() {
        const nombre = nombreInput.value;
        alert(`¡Soy ! ${nombre}`);
    });
});
