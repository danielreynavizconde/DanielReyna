var arrLang = {
    'en': {
        'MENU_INICIO': 'Home',
        'MENU_NOSOTROS': 'Know us',
        'MENU_SOLUCIONES': 'Solutions',
        'MENU_CLIENTES': 'Clients',
        'MENU_CONTACTANOS': 'Contact us',
        'CONTACT_TITULO': 'Our Clients',
        'PAISES': 'COUNTRIES',
        'CLIENTES': 'CLIENTS',
        'PERSONAS_BENEFICIADAS': 'PEOPLE BENEFITED',

        'SOLUCIONES': 'Implemented  ',
        'IMPLEMENTADAS': 'Solutions',

        'FOOTER_COPY': '© Designed by YAPU Solutions | Copyright 2020'
    },
    'es': {
        'MENU_INICIO': 'Inicio',
        'MENU_NOSOTROS': 'Conócenos',
        'MENU_SOLUCIONES': 'Soluciones',
        'MENU_CLIENTES': 'Clientes',
        'MENU_CONTACTANOS': 'Contáctanos',
        'CONTACT_TITULO': 'Nuestros Clientes',
        'PAISES': 'PAÍSES',
        'CLIENTES': 'CLIENTES',
        'PERSONAS_BENEFICIADAS': 'PERSONAS BENEFICIADAS',

        'SOLUCIONES': 'Soluciones  ',
        'IMPLEMENTADAS': 'implementadas',

        'FOOTER_COPY': '© Diseñado por YAPU Solutions | Copyright 2020'
    }
}

$(document).ready(function() {
    $("#testimonial-slider").owlCarousel({
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [992, 1],
        itemsTablet: [768, 1],
        pagination: false,
        navigation: true,
        navigationText: ["", ""],
        autoPlay: true
    });

    $('.js-translate').click(function() {
        var lang = $(this).attr('id');
        $('.lang').each(function(index, element) {
            if ($(this).is("input") || $(this).is("textarea")) {
                $(this).attr('placeholder', arrLang[lang][$(this).attr('key')]);
            } else {
                $(this).text(arrLang[lang][$(this).attr('key')]);
            }
        });
    });
});