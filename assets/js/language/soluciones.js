var language_select = 'es';

var arrLang = {
    'en': {
        'MENU_INICIO': 'Home',
        'MENU_NOSOTROS': 'Know us',
        'MENU_SOLUCIONES': 'Solutions',
        'MENU_CLIENTES': 'Clients',
        'MENU_CONTACTANOS': 'Contact us',
        'SLIDER_NUESTRAS_SOLUCIONES': 'Our Solutions',
        'VER_SOLUCION': 'See Solution',
        'SOFTFACTORY_DESC': 'We develop technological solutions capable of giving an effective response through agile development methodologies according to customer needs, always having a quality service and commitment.',
        'AGRITRACER_PLATAFORMA': 'Support Platform for Agricultural Management',
        'AGRITRACER_DESC': 'Platform composed of different modules that are fully administrable and necessary for the integration of information on the different agricultural activities, through the use of Web and Mobile technology under the SaaS modality.',
        'RHSYS_SLOGAN': 'Payroll Management Platform',
        'RHSYS_DESC1': 'Platform that has the payroll calculation engine and multiple functionalities of the different labor regimes, solid, agile and safe for any volume of personnel and with great performance of processing.',
        'RHSYS_DESC2': 'It contains a series of modules that Agritracer integrates: Labor with agricultural work, based on criteria for accounting for hours (wages) or bonuses configured by the same users.',
        'SOLUCIONES': 'Solutions',
        'COMO_SERVICIO': 'as a service (SaaS)',

        'BROCHURE': 'SEE BROCHURE',
        'BUTTON_MODAL': 'CLOSE',
        'FOOTER_COPY': '© Designed by YAPU Solutions | Copyright 2020'
    },
    'es': {
        'MENU_INICIO': 'Inicio',
        'MENU_NOSOTROS': 'Conócenos',
        'MENU_SOLUCIONES': 'Soluciones',
        'MENU_CLIENTES': 'Clientes',
        'MENU_CONTACTANOS': 'Contactanos',
        'SLIDER_NUESTRAS_SOLUCIONES': 'Nuestras Soluciones',
        'VER_SOLUCION': 'Ver Solución',
        'SOFTFACTORY_DESC': 'Desarrolamos soluciones tecnológicas capaces de dar respuesta efectiva a través de metologías ágiles de desarrollo de acuerdo a las necesidades del cliente, contando siempre con un servicio de calidad y compromiso.',
        'AGRITRACER_PLATAFORMA': 'Plataforma de Soporte a la Gestión Agrícola',
        'AGRITRACER_DESC': 'Plataforma compuesta por distintos módulos totalmente administrables y necesarios para la integración de información sobre las distintas actividades agrarias, mediante el uso de tecnología Web y Móvil bajo la modalidad SaaS.',
        'RHSYS_SLOGAN': 'Plataforma de Gestión de Nómina',
        'RHSYS_DESC1': 'Plataforma que cuenta con el motor de cálculo de planillas y múltiples funcionalidades de los distintos regímenes laborales, sólida, ágil y segura para cualquier volumen de personal y con gran perfomance de procesamiento.',
        'RHSYS_DESC2': 'Contiene una serie de módulos que integra Agritracer: Mano de Obra con el tareo agrícola, basado en criterios de contabilización de horas(jornales) u bonos configurado por los mismos usuarios.',
        'SOLUCIONES': 'Soluciones',
        'COMO_SERVICIO': 'como servicio (SaaS)',
        'BROCHURE': 'Ver BROCHURE',
        'BUTTON_MODAL': 'Cerrar',
        'FOOTER_COPY': '© Diseñado por YAPU Solutions | Copyright 2020'
    }
}

$(document).ready(function() {
    $('.js-translate').click(function() {
        language_select = $(this).attr('id');
        $('.lang').each(function(index, element) {
            if ($(this).is("input") || $(this).is("textarea")) {
                $(this).attr('placeholder', arrLang[language_select][$(this).attr('key')]);
            } else {
                $(this).text(arrLang[language_select][$(this).attr('key')]);
            }
        });
    });
});

function goToModal(title) {
    console.log($)
    $('#title-modal').text(title);

    let item = '0';

    switch (title) {
        case 'Agritracer':
            item = '1';
            $('#content-modal-subtitle').text('Plataforma de Soporte a la Gestión Agrícola');
            $('#content-modal-resume1').text('Plataforma compuesta por distintos módulos totalmente administrables y necesarios para la integración de información sobre las distintas actividades agrarias, mediante el uso de tecnología Web y Móvil bajo la modalidad SaaS.');
            $('#content-modal-resume2').text('');
            $('#content-modal-resume3').text('');

            $('#modal-imagen').attr('src', 'assets/images/soluciones/mockup-agritracer.png');

            $('#modal-imagen1').attr('src', '');
            $('#modal-imagen2').attr('src', '');
            $('#modal-imagen3').attr('src', '');
            $('#modal-imagen4').attr('src', '');
            $('#modal-imagen5').attr('src', '');
            $('#modal-imagen6').attr('src', '');

            $('#verFolleto').attr('href', 'https://agritracer.pe/');
            $('#verFolleto').show();
            break;

        case 'WorkAPP':
            item = '2';
            $('#content-modal-subtitle').text('');
            $('#content-modal-resume1').text('');
            $('#content-modal-resume2').text('');
            $('#content-modal-resume3').text('');

            $('#modal-imagen1').attr('src', 'assets/files/workapp1.jpg');
            $('#modal-imagen2').attr('src', 'assets/files/workapp2.jpg');
            $('#modal-imagen3').attr('src', 'assets/files/workapp3.jpg');
            $('#modal-imagen4').attr('src', 'assets/files/workapp4.jpg');
            $('#modal-imagen5').attr('src', 'assets/files/workapp5.jpg');
            $('#modal-imagen6').attr('src', 'assets/files/workapp6.jpg');

            $('#modal-imagen').attr('src', '');
            $('#verFolleto').attr('src', 'assets/files/BROCHURE-WorkAPP.pdf');
            $('#verFolleto').hide();

            break;

        case 'RHSYS':
            item = '3';
            $('#content-modal-subtitle').text('');
            $('#content-modal-resume1').text('');
            $('#content-modal-resume2').text('Plataforma que cuenta con el motor de cálculo de planillas y múltiples funcionalidades de los distintos regímenes laborales, sólida, ágil y segura para cualquier volumen de personal y con gran perfomance de procesamiento.');
            $('#content-modal-resume3').text('Contiene una serie de módulos que integra Agritracer: Mano de Obra con el tareo agrícola, basado en criterios de contabilización de horas(jornales) u bonos configurado por los mismos usuarios.');
            $('#modal-imagen').attr('src', 'assets/images/soluciones/laptop-rhsys.jpg');

            $('#modal-imagen1').attr('src', '');
            $('#modal-imagen2').attr('src', '');
            $('#modal-imagen3').attr('src', '');
            $('#modal-imagen4').attr('src', '');
            $('#modal-imagen5').attr('src', '');
            $('#modal-imagen6').attr('src', '');

            $('#verFolleto').attr('href', 'https://rhsys.pe/');
            $('#verFolleto').show();
            break;
    }
    $('#content-modal-subtitle').text(arrLang[language_select]['SOLUTIONS_ITEM_' + item + '_SUBTITULO']);
    $('#content-modal-resume').text(arrLang[language_select]['SOLUTIONS_ITEM_' + item + '_TEXTO']);
}