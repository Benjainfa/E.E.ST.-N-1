
document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const sliderItems = document.querySelectorAll('.slider-item');
    const sliderContent = document.querySelector('.slider-content');

    function showSlide(index) {
        currentSlide = (index + sliderItems.length) % sliderItems.length;
        const offset = -currentSlide * 100;
        sliderContent.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Configurar el intervalo para cambiar las imágenes automáticamente cada 10 segundos
    const intervalId = setInterval(nextSlide, 10000); // Cambia la imagen cada 10 segundos

    // Asegurarse de mostrar la primera imagen al cargar la página
    showSlide(currentSlide);
});

function irASeccion(idSeccion) {
    const seccion = document.getElementById(idSeccion);
    if (seccion) {
        seccion.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
    }
    
}