// Obtenemos el formulario por su ID;
const formulario = document.getElementById('contactForm');

// Escuchamos el evento de envío del formulario;
formulario.addEventListener('submit', function(event) {
    
    // Variables de estado para saber si hay errores;
    let hayErrores = false;

    // Obtenemos los valores de los campos eliminando espacios al inicio y final;
    const nombre = document.getElementById('nombre').value.trim();
    const ciudad = document.getElementById('ciudad').value.trim();
    const email = document.getElementById('email').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();

    // Referencias a los contenedores de mensajes de error;
    const errorNombre = document.getElementById('error-nombre');
    const errorCiudad = document.getElementById('error-ciudad');
    const errorEmail = document.getElementById('error-email');
    const errorAsunto = document.getElementById('error-asunto');
    const errorDescripcion = document.getElementById('error-descripcion');

    // Limpiamos los mensajes de error previos;
    errorNombre.textContent = "";
    errorCiudad.textContent = "";
    errorEmail.textContent = "";
    errorAsunto.textContent = "";
    errorDescripcion.textContent = "";

    // Validación del Nombre (No vacío y mínimo 3 caracteres);
    if (nombre === "") {
        errorNombre.textContent = "El nombre es obligatorio.";
        hayErrores = true;
    } else if (nombre.length < 3) {
        errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
        hayErrores = true;
    }

    // Validación de la Ciudad (No vacía);
    if (ciudad === "") {
        errorCiudad.textContent = "La ciudad es obligatoria.";
        hayErrores = true;
    }

    // Validación del Email (No vacío y formato válido usando expresión regular);
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        errorEmail.textContent = "El correo electrónico es obligatorio.";
        hayErrores = true;
    } else if (!regexEmail.test(email)) {
        errorEmail.textContent = "El formato del correo no es válido.";
        hayErrores = true;
    }

    // Validación del Asunto (No vacío);
    if (asunto === "") {
        errorAsunto.textContent = "El asunto es obligatorio.";
        hayErrores = true;
    }

    // Validación de la Descripción (No vacía y mínimo 10 caracteres);
    if (descripcion === "") {
        errorDescripcion.textContent = "La descripción es obligatoria.";
        hayErrores = true;
    } else if (descripcion.length < 10) {
        errorDescripcion.textContent = "La descripción debe tener al menos 10 caracteres.";
        hayErrores = true;
    }

    // Si existe algún error, evitamos que el formulario se envíe;
    if (hayErrores) {
        event.preventDefault();
    } else {
        // Si todo está correcto, podemos mostrar una alerta de éxito;
        alert("¡Formulario enviado con éxito!");
    }
});