// Esperar a que el DOM esté completamente cargado;
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    // Escuchar el evento submit del formulario;
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir envío por defecto;
        
        // Llamar a la función de validación;
        if (validateForm()) {
            alert('✅ ¡Formulario válido! Mensaje enviado con éxito.');
            // Opcional: limpiar el formulario después de enviar;
            // form.reset();
        } else {
            alert('❌ Por favor, corrija los errores en el formulario.');
        }
    });
});

/**
 * Función principal de validación del formulario;
 * Retorna true si todos los campos son válidos, false si hay errores;
 */
function validateForm() {
    let isValid = true;
    
    // ==========================================
    // Validar Nombre
    // ==========================================
    // Requisitos: No vacío, mínimo 3 caracteres;
    const nombre = document.getElementById('nombre');
    const valorNombre = nombre.value.trim();
    
    if (valorNombre === '' || valorNombre.length < 3) {
        nombre.classList.add('no-valid');
        isValid = false;
    } else {
        nombre.classList.remove('no-valid');
    }
    
    // ==========================================
    // Validar Ciudad
    // ==========================================
    // Requisitos: No vacío;
    const ciudad = document.getElementById('ciudad');
    const valorCiudad = ciudad.value.trim();

    if (valorCiudad === '') {
        ciudad.classList.add('no-valid');
        isValid = false;
    } else {
        ciudad.classList.remove('no-valid');
    }
    
    // ==========================================
    // Validar Email
    // ==========================================
    // Requisitos: No vacío, formato de correo válido;
    const email = document.getElementById('email');
    const valorEmail = email.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (valorEmail === '' || !regexEmail.test(valorEmail)) {
        email.classList.add('no-valid');
        isValid = false;
    } else {
        email.classList.remove('no-valid');
    }
    
    // ==========================================
    // Validar Asunto
    // ==========================================
    // Requisitos: No vacío;
    const asunto = document.getElementById('asunto');
    const valorAsunto = asunto.value.trim();

    if (valorAsunto === '') {
        asunto.classList.add('no-valid');
        isValid = false;
    } else {
        asunto.classList.remove('no-valid');
    }
    
    // ==========================================
    // Validar Descripción
    // ==========================================
    // Requisitos: No vacío, mínimo 10 caracteres;
    const descripcion = document.getElementById('descripcion');
    const valorDescripcion = descripcion.value.trim();

    if (valorDescripcion === '' || valorDescripcion.length < 10) {
        descripcion.classList.add('no-valid');
        isValid = false;
    } else {
        descripcion.classList.remove('no-valid');
    }
    
    // Retornar el resultado final de la validación;
    return isValid;
}