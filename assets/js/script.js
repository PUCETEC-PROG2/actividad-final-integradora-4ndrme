// Esperar a que el DOM esté completamente cargado;
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioContacto');
    
    if (formulario) {
        // Escuchar el evento submit del formulario;
        formulario.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevenir envío por defecto;
            
            // Llamar a la función de validación;
            if (validarFormulario()) {
                alert('✅ ¡Formulario válido! Mensaje enviado con éxito.');
                // formulario.reset(); // Opcional: limpiar al enviar;
            } else {
                alert('❌ Por favor, corrija los errores en el formulario.');
            }
        });
    }
});

function validarFormulario() {
    let esValido = true;
    
    // Validar Nombre;
    const nombre = document.getElementById('nombre');
    const valorNombre = nombre.value.trim();
    if (valorNombre === '' || valorNombre.length < 3) {
        nombre.classList.add('no-valid');
        esValido = false;
    } else {
        nombre.classList.remove('no-valid');
    }
    
    // Validar Ciudad;
    const ciudad = document.getElementById('ciudad');
    const valorCiudad = ciudad.value.trim();
    if (valorCiudad === '') {
        ciudad.classList.add('no-valid');
        esValido = false;
    } else {
        ciudad.classList.remove('no-valid');
    }
    
    // Validar Email;
    const email = document.getElementById('email');
    const valorEmail = email.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (valorEmail === '' || !regexEmail.test(valorEmail)) {
        email.classList.add('no-valid');
        esValido = false;
    } else {
        email.classList.remove('no-valid');
    }
    
    // Validar Asunto;
    const asunto = document.getElementById('asunto');
    const valorAsunto = asunto.value.trim();
    if (valorAsunto === '') {
        asunto.classList.add('no-valid');
        esValido = false;
    } else {
        asunto.classList.remove('no-valid');
    }
    
    // Validar Descripción;
    const descripcion = document.getElementById('descripcion');
    const valorDescripcion = descripcion.value.trim();
    if (valorDescripcion === '' || valorDescripcion.length < 10) {
        descripcion.classList.add('no-valid');
        esValido = false;
    } else {
        descripcion.classList.remove('no-valid');
    }
    
    return esValido;
}

// ==========================================
// LÓGICA DE FILTRADO DE PRODUCTOS
// ==========================================
const tarjetasProductos = document.querySelectorAll('.tarjeta-producto');

if (tarjetasProductos.length > 0) {
    const valoresURL = new URLSearchParams(window.location.search);
    const categoriaSeleccionada = valoresURL.get('cat');

    if (categoriaSeleccionada) {
        tarjetasProductos.forEach(function(tarjeta) {
            const categoriaTarjeta = tarjeta.getAttribute('data-categoria');
            if (categoriaTarjeta !== categoriaSeleccionada) {
                tarjeta.style.display = 'none';
            }
        });
    }
}