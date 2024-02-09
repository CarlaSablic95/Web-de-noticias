document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        // Opciones de configuración
        type: 'slide',
        perPage: 1,
        arrows: false,
        autoplay: true,
        interval: 1000,
        loop: true
    }).mount();
});
