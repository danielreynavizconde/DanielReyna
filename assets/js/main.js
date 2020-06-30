$(document).ready(function() {
    $('#js-main-slider').pogoSlider({
        autoplay: true,
        autoplayTimeout: 5000,
        displayProgess: true,
        targetWidth: 1000,
        targetHeight: 300,
        elementTransitionDuration: 500,
        responsive: true
    }).data('plugin_pogoSlider');
});