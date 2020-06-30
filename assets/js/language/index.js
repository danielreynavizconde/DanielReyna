var arrLang = {
    'en': {
        'MENU_INICIO': 'Home',
        'MENU_NOSOTROS': 'Know us',
        'MENU_SOLUCIONES': 'Solutions',
        'MENU_CLIENTES': 'Clients',
        'MENU_CONTACTANOS': 'Contact us',
        'SLIDER_1_TITULO_1': 'Grow',
        'SLIDER_1_TITULO_2': 'Technology',
        'SLIDER_2_TITULO_1': 'We are a',
        'SLIDER_2_TITULO_2': 'specialized and',
        'SLIDER_2_TITULO_3': 'experienced team',
        'SLIDER_3_TITULO_1': 'Solutions',
        'SLIDER_3_TITULO_2': 'that generate',
        'SLIDER_3_TITULO_3': 'added value',
        'SLIDER_BOTON_CONTACTO': 'know us',
        'SLIDER_BOTON_VER': 'See Solutions',
        'CLIENTS_TTULO': 'Our Clients',
        'RECORD_PAISES': 'COUNTRIES',
        'RECORD_CLIENTES': 'CLIENTS',
        'RECORD_PERSONAS_BENEFICIADAS': 'PEOPLE BENEFITED',
        'RECORD_VER_SOLUCIONES': 'See Solutions',
        'CONTACT_TITULO': 'Contact us',
        'CONTACT_OFI_1_TITULO': 'Office Trujillo',
        'CONTACT_OFI_2_TITULO': 'Office Lima',
        'CONTACT_TELEFONO_TITULO': 'Phone',
        'CONTACT_CORREO_TITULO': 'Email',
        'LOCATION_TITULO': 'Send us your Message',
        'LOCATION_INPUT_NOMBRE': 'Name',
        'LOCATION_INPUT_CORREO': 'Email',
        'LOCATION_INPUT_CELULAR': 'Phone Number',
        'LOCATION_INPUT_MENSAJE': 'Message',
        'LOCATION_BOTON': 'Send',
        'FOOTER_COPY': '© Designed by YAPU Solutions | Copyright 2020',
        'LIBRARY_APP': 'Application Library',
        'HELP_DESK': 'Help desk'
    },
    'es': {
        'MENU_INICIO': 'Inicio',
        'MENU_NOSOTROS': 'Conócenos',
        'MENU_SOLUCIONES': 'Soluciones',
        'MENU_CLIENTES': 'Clientes',
        'MENU_CONTACTANOS': 'Contáctanos',
        'SLIDER_1_TITULO_1': 'Cultivamos',
        'SLIDER_1_TITULO_2': 'Tecnología',
        'SLIDER_2_TITULO_1': 'Somos un equipo',
        'SLIDER_2_TITULO_2': 'especializado y',
        'SLIDER_2_TITULO_3': 'con experiencia',
        'SLIDER_3_TITULO_1': 'Soluciones que',
        'SLIDER_3_TITULO_2': 'generan valor',
        'SLIDER_3_TITULO_3': 'agregado',
        'SLIDER_BOTON_CONTACTO': 'Conócenos',
        'SLIDER_BOTON_VER': 'ver Soluciones',
        'CLIENTS_TTULO': 'Nuestros Clientes',
        'RECORD_PAISES': 'PAÍSES',
        'RECORD_CLIENTES': 'CLIENTES',
        'RECORD_PERSONAS_BENEFICIADAS': 'PERSONAS BENEFICIADAS',
        'RECORD_VER_SOLUCIONES': 'Ver Soluciones',
        'CONTACT_TITULO': 'Contáctanos',
        'CONTACT_OFI_1_TITULO': 'Oficina Trujillo',
        'CONTACT_OFI_2_TITULO': 'Oficina Lima',
        'CONTACT_TELEFONO_TITULO': 'Teléfono',
        'CONTACT_CORREO_TITULO': 'Email',
        'LOCATION_TITULO': 'Envíanos tu mensaje',
        'LOCATION_INPUT_NOMBRE': 'nOMBRE',
        'LOCATION_INPUT_CORREO': 'Email',
        'LOCATION_INPUT_CELULAR': 'Celular',
        'LOCATION_INPUT_MENSAJE': 'Mensaje',
        'LOCATION_BOTON': 'ENVIAR',
        'FOOTER_COPY': '© Diseñado por YAPU Solutions | Copyright 2020',
        'LIBRARY_APP': 'Biblioteca de Aplicaciones',
        'HELP_DESK': 'Mesa de Ayuda'
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