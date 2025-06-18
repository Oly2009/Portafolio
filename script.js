document.addEventListener('DOMContentLoaded', function() {

    // Inicializar AOS (Animate on Scroll)
    AOS.init({
        duration: 1000, // Duración de la animación en milisegundos
        once: true, // La animación solo ocurre una vez
    });

    // Configuración de Typed.js para el texto dinámico
    const typed = new Typed('#typed-text', {
        strings: [
            'Desarrolladora Web.',
            'Técnico Superior en DAW.',
            'una apasionada por la tecnología.',
            'una solucionadora de problemas.'
        ],
        typeSpeed: 70,
        backSpeed: 35,
        loop: true,
        backDelay: 2000,
    });
    
    // Cambiar el fondo de la barra de navegación al hacer scroll
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

});