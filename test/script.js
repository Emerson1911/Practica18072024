const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const rows = document.querySelectorAll('tbody tr');

nombreInput.addEventListener('input', () => {
    const filtroNombre = nombreInput.value.trim().toLowerCase();
    rows.forEach(row => {
        const nombre = row.cells[0].textContent.trim().toLowerCase();
        if (nombre.includes(filtroNombre)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

apellidoInput.addEventListener('input', () => {
    const filtroApellido = apellidoInput.value.trim().toLowerCase();
    rows.forEach(row => {
        const apellido = row.cells[1].textContent.trim().toLowerCase();
        if (apellido.includes(filtroApellido)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
