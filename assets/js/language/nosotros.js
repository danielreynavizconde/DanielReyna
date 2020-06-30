var arrLang = {
    'en': {
        'MENU_INICIO': 'Home',
        'MENU_NOSOTROS': 'Know us',
        'MENU_SOLUCIONES': 'Solutions',
        'MENU_CLIENTES': 'Clients',
        'MENU_CONTACTANOS': 'Contact us',
        'SLIDER_CONOCENOS': 'Know us',
        'ABOUT_TITULO': 'ABOUT US',
        'ABOUT_TEXTO_1': 'We are specialists providing technological solutions for the efficient support and control of the agricultural operation.',
        'ABOUT_TEXTO_2': 'Through the SaaS (Software as a Service) and Software factory modalities, we provide solutions for the control of your business with real-time information for decision-making and continuous improvement.',
        'ABOUT_TEXTO_3': 'Our solutions are implemented considering strategies for optimizing operational processes, seeking to reduce complexity and inefficient times for proper management of operations in any geographic area.',
        'VALUES_TITULO': 'Values',
        'VALUES_ITEM_1': 'High',
        'VALUES_ITEM_2': 'quality',
        'VALUES_ITEM_3': 'Innovation',
        'VALUES_ITEM_4': 'Agile Project Development',
        'VALUES_ITEM_5': 'Development',
        'VALUES_ITEM_6': 'Commitment',
        'VALUES_ITEM_7': ' and Collaboration',
        'VALUES_ITEM_8': ' Competition',
        'VALUES_ITEM_9': ' and experience',
        'POLICIES_TITULO': 'QUALITY POLICY',
        'POLICIES_TEXTO_1': 'Yapu Solutions, a company dedicated to the service of technology development for the support of the agricultural operation, has the vision of being a leading company of technological solutions in the field and expanding to international markets. As part of its development and strategic direction.',
        'POLICIES_TEXTO_2': 'Meet the requirements of customers, stakeholders, legal and other requirements applicable to the organizations business, generating a quality culture by strengthening human talent.',
        'POLICIES_TEXTO_3': 'Provide technological services that meet the technical specifications of quality and the achievement of the needs and expectations of the user, guaranteeing their satisfaction.',
        'POLICIES_TEXTO_4': 'Promote the continuous improvement of the quality management system by evaluating performance and generating opportunities for improvement through all processes.',
        'POLICIES_TEXTO_5': 'This policy will serve as a frame of reference for the establishment of quality objectives and will be disseminated, communicated and understood to collaborators and interested parties.',
        'FOOTER_COPY': '© Designed by YAPU Solutions | Copyright 2020'
    },
    'es': {
        'MENU_INICIO': 'inicio',
        'MENU_NOSOTROS': 'Conócenos',
        'MENU_SOLUCIONES': 'Soluciones',
        'MENU_CLIENTES': 'Clientes',
        'MENU_CONTACTANOS': 'Contáctanos',
        'SLIDER_CONOCENOS': 'Conócenos',
        'ABOUT_TITULO': 'QUIÉNES SOMOS',
        'ABOUT_TEXTO_1': 'Somos especialistas brindando soluciones tecnológicas para el soporte y control eficiente de la operación agrícola.',
        'ABOUT_TEXTO_2': 'Mediante las modalidades de SaaS (Software como Servicio) y Software factory, aportamos soluciones para el control de tu negocio con información en tiempo real para la toma de decisiones y mejora continua.',
        'ABOUT_TEXTO_3': 'Nuestras soluciones se implementan considerando estrategias de optimización de procesos operativos, buscando reducción la complejidad y los tiempos ineficientes para un manejo adecuado de operaciones en cualquier zona geográfica.',
        'VALUES_TITULO': 'Valores',
        'VALUES_ITEM_1': 'Alta',
        'VALUES_ITEM_2': 'calidad',
        'VALUES_ITEM_3': 'Innovación',
        'VALUES_ITEM_4': 'Desarrollo ágil',
        'VALUES_ITEM_5': 'de Proyectos',
        'VALUES_ITEM_6': 'Compromiso',
        'VALUES_ITEM_7': 'y Colaboración',
        'VALUES_ITEM_8': 'Competencia',
        'VALUES_ITEM_9': 'y experiencia',
        'POLICIES_TITULO': 'QUALITY POLICY',
        'POLICIES_TEXTO_1': 'Yapu Solutions, empresa dedicada al servicio de desarrollo de tecnología para el soporte de la operación agrícola, tiene como visión ser una empresa lider de soluciones tecnológicas en el rubro y expandirse a mercados internacionales. Como parte de su desarrollo y dirección estratégica.',
        'POLICIES_TEXTO_2': 'Cumplir los requisitos de los clientes, partes interesadas, legales y demás requisitos aplicables al rubro de la organización, generando una cultura de calidad mediante el fortalecimiento del talento humano.',
        'POLICIES_TEXTO_3': 'Brindar servicios tecnológicos que cumplan las especificaciones técnicas de calidad y el logro de las necesidades y expectativas del usuario, garantizando su satisfacción.',
        'POLICIES_TEXTO_4': 'Promover la mejora continua del sistema de gestión de la calidad mediante la evaluación del desempeño y generación de oportunidades de mejora a través de todos los procesos.',
        'POLICIES_TEXTO_5': 'Esta política servirá como marco de referencia para el establecimiento de los objetivos de la calidad y será difundida, comunicada y entendida a los colaboradores y a las partes interesadas.',
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