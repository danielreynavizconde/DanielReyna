var arrLang = {
    'en': {
        'MENU_INICIO': 'Home',
        'MENU_NOSOTROS': 'Know us',
        'MENU_SOLUCIONES': 'Solutions',
        'MENU_CLIENTES': 'Clients',
        'MENU_CONTACTANOS': 'Contact us',
        'CONTACT_TITULO': 'Contact us',
        'LOCATION_TITULO': 'Send us your message',
        'CONTACT_OFI_1_TITULO': 'Office Trujillo',
        'CONTACT_OFI_2_TITULO': 'Office Lima',
        'CONTACT_TELEFONO_TITULO': 'Phone',
        'CONTACT_CORREO_TITULO': 'Email',
        'LOCATION_TITULO': 'Send us your message',
        'LOCATION_INPUT_NOMBRE': 'Name',
        'LOCATION_INPUT_CORREO': 'Email',
        'LOCATION_INPUT_CELULAR': 'Phone number',
        'LOCATION_INPUT_MENSAJE': 'Message',
        'LOCATION_BOTON': 'Send',
        'FOOTER_COPY': '© Designed by YAPU Solutions | Copyright 2020'
    },
    'es': {
        'MENU_INICIO': 'Inicio',
        'MENU_NOSOTROS': 'Conócenos',
        'MENU_SOLUCIONES': 'Soluciones',
        'MENU_CLIENTES': 'Clientes',
        'MENU_CONTACTANOS': 'Contáctanos',
        'CONTACT_TITULO': 'Contáctanos',
        'LOCATION_TITULO': 'Envíanos tu Mensaje',
        'CONTACT_OFI_1_TITULO': 'Oficina Trujillo',
        'CONTACT_OFI_2_TITULO': 'Oficina Lima',
        'CONTACT_TELEFONO_TITULO': 'Teléfono',
        'CONTACT_CORREO_TITULO': 'Email',
        'LOCATION_TITULO': 'Envíanos tu Mensaje',
        'LOCATION_INPUT_NOMBRE': 'Nombre',
        'LOCATION_INPUT_CORREO': 'Email',
        'LOCATION_INPUT_CELULAR': 'Celular',
        'LOCATION_INPUT_MENSAJE': 'Mensaje',
        'LOCATION_BOTON': 'ENVIAR',
        'FOOTER_COPY': '© Diseñado por YAPU Solutions | Copyright 2020'
    }
}

$(document).ready(function() {
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