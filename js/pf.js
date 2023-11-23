document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.getElementById('loginButton');

    // Agregamos un evento al botón de inicio de sesión
    loginButton.addEventListener('click', function () {
        // Obtenemos los valores de los campos
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const comments = document.getElementById('comments').value;

        // Verificamos si los campos no están vacíos
        if (username && email && comments) {
            // Mostramos un mensaje de éxito
            alert('No te puedo asegurar una inscripción, esta página es uno de los proyectos de los alumnos, gracias por colaborar con tus datos');
        } else {
            // Mostramos un mensaje indicando que es necesario completar todos los campos
            alert('porfavor, no vuelva a intentarlo');
        }
    });
});
