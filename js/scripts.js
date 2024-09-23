/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

$(function() {
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    var currentYear = new Date().getFullYear();
    calendar = new Calendar('.calendar', {
        language: 'fr',
        style: 'background',
        /*displayHeader: false,*/
        minDate: new Date(currentYear, 0, 1),
        maxDate: new Date(currentYear + 1, 11, 31),
        mouseOnDay: function(e) {
            if(e.events.length > 0) {
                var content = '';
                
                for(var i in e.events) {
                    content += '<div class="event-tooltip-content">'
                                    + '<div class="event-name" style="font-weight: bold;color:' + e.events[i].color + '">' + e.events[i].name + '</div>'
                                    + '<div class="event-description"><small>' + e.events[i].description + '</small></div>'
                                + '</div>';
                }
            
                $(e.element).popover({ 
                    trigger: 'manual',
                    container: 'body',
                    html:true,
                    content: content
                });
                
                $(e.element).popover('show');
            }
        },
        mouseOutDay: function(e) {
            if(e.events.length > 0) {
                $(e.element).popover('hide');
            }
        },
        dataSource: [
            /* 2024 */
            {startDate: new Date(currentYear, 0, 1), endDate: new Date(currentYear, 0, 1), name: 'Nouvel an', description: 'Il marque le début de la nouvelle année pour de nombreuses cultures. Cette date a été fixée par l\'empereur romain Jules César en 46 avant notre ère.'},
            {startDate: new Date(currentYear, 0, 11), endDate: new Date(currentYear, 0, 11), name: 'Manifeste de l\’indépendance', description: 'Le Manifeste du 11 janvier 1944 ou Manifeste de l\'Indépendance du Maroc est un acte grandement symbolique au Maroc, qui consolide et formalise les prises de position nationalistes issues du Manifeste contre le Dahir berbère du 28 août 1930.'},
            {startDate: new Date(currentYear, 0, 14), endDate: new Date(currentYear, 0, 14), name: 'Nouvel an Amazigh', description: 'Yennayer marque le Premier jour de l\'année selon le calendrier agraire amazigh, remontant à l\'Antiquité. Célébré entre le 12 et les 14 janvier de chaque année, le nouvel an Amazigh correspond au calendrier julien, décalé de treize jours par rapport au calendrier grégorien.'},
            {startDate: new Date(currentYear, 4, 1), endDate: new Date(currentYear, 4, 1), name: 'Fête du travail', description: 'La journée internationale des travailleurs, ou fête des travailleurs, devenue fête du Travail, est une fête internationale annuelle célébrant les travailleurs. Elle est l\'occasion d\'importantes manifestations du mouvement ouvrier.'},
            {startDate: new Date(currentYear, 6, 30), endDate: new Date(currentYear, 6, 30), name: 'Fête du trône', description: 'La fête du trône vise à célébrer l\'accession au trône du souverain marocain, et se célèbre donc le 30 juillet de chaque année, commémorant ainsi le 30 juillet 1999, date de l\'intronisation de Mohammed VI.'},
            {startDate: new Date(currentYear, 7, 14), endDate: new Date(currentYear, 7, 14), name: 'Allégeance Oued Eddahab', description: 'Anniversaire de la récupération du province Oued Eddahab.'},
            {startDate: new Date(currentYear, 7, 20), endDate: new Date(currentYear, 7, 20), name: 'Révolution du Roi et du peuple', description: 'La Révolution du Roi et du Peuple est, dans l\'histoire du Maroc, la suite d\'événements qui virent notamment les autorités coloniales françaises tenter de placer Mohammed ben Arafa sur le Trône alaouite.'},
            {startDate: new Date(currentYear, 7, 21), endDate: new Date(currentYear, 7, 21), name: 'Fête de la jeunesse', description: 'La Fête de la Jeunesse offre l\'occasion de mettre en exergue l\'engagement constant de Sa Majesté le Roi Mohammed VI en faveur de la promotion de la place des jeunes, véritable richesse du Royaume, dans la dynamique sociétale et de leur participation politique et économique.'},
            {startDate: new Date(currentYear, 10, 6), endDate: new Date(currentYear, 10, 6), name: 'Anniversaire de la Marche verte', description: 'La Marche verte est une grande marche pacifique partie du Maroc le 6 novembre 1975 vers le Sahara marocain lancée par le roi Hassan II dans le but de le récupérer.'},
            {startDate: new Date(currentYear, 10, 18), endDate: new Date(currentYear, 10, 18), name: 'Fête de l’indépendance', description: 'Le jour de l\'indépendance ou fête de l\'indépendance est le jour commémorant l\'obtention ou la déclaration d\'indépendance.'},
            {startDate: new Date(currentYear, 6, 8), endDate: new Date(currentYear, 6, 8), name: '1er Moharram', description: 'premier jour du nouvel an de l\'hégire'},
            {startDate: new Date(currentYear, 8, 16), endDate: new Date(currentYear, 8, 16), name: 'Aïd Al Mawlid', description: 'Fête musulmane, le Mawlid commémore la naissance du prophète Mohamed.'},
            {startDate: new Date(currentYear, 3, 10), endDate: new Date(currentYear, 3, 11), name: 'Aïd Al Fitr', description: 'Aïd el-Fitr est la fête musulmane marquant la rupture du jeûne du mois de ramadan. Elle est célébrée le premier jour du mois de chawwal.'},
            {startDate: new Date(currentYear, 5, 17), endDate: new Date(currentYear, 5, 18), name: 'Aïd Al Adha', description: 'Fête religieuse musulmane commémorant le sacrifice d\'Abraham, célébrée à l\'époque du pèlerinage annuel à La Mecque.'},

            /* 2025 */
            {startDate: new Date(currentYear + 1, 0, 1), endDate: new Date(currentYear + 1, 0, 1), name: 'Nouvel an', description: 'Il marque le début de la nouvelle année pour de nombreuses cultures. Cette date a été fixée par l\'empereur romain Jules César en 46 avant notre ère.'},
            {startDate: new Date(currentYear + 1, 0, 11), endDate: new Date(currentYear + 1, 0, 11), name: 'Manifeste de l\’indépendance', description: 'Le Manifeste du 11 janvier 1944 ou Manifeste de l\'Indépendance du Maroc est un acte grandement symbolique au Maroc, qui consolide et formalise les prises de position nationalistes issues du Manifeste contre le Dahir berbère du 28 août 1930.'},
            {startDate: new Date(currentYear + 1, 0, 14), endDate: new Date(currentYear + 1, 0, 14), name: 'Nouvel an Amazigh', description: 'Yennayer marque le Premier jour de l\'année selon le calendrier agraire amazigh, remontant à l\'Antiquité. Célébré entre le 12 et les 14 janvier de chaque année, le nouvel an Amazigh correspond au calendrier julien, décalé de treize jours par rapport au calendrier grégorien.'},
            {startDate: new Date(currentYear + 1, 4, 1), endDate: new Date(currentYear + 1, 4, 1), name: 'Fête du travail', description: 'La journée internationale des travailleurs, ou fête des travailleurs, devenue fête du Travail, est une fête internationale annuelle célébrant les travailleurs. Elle est l\'occasion d\'importantes manifestations du mouvement ouvrier.'},
            {startDate: new Date(currentYear + 1, 6, 30), endDate: new Date(currentYear + 1, 6, 30), name: 'Fête du trône', description: 'La fête du trône vise à célébrer l\'accession au trône du souverain marocain, et se célèbre donc le 30 juillet de chaque année, commémorant ainsi le 30 juillet 1999, date de l\'intronisation de Mohammed VI.'},
            {startDate: new Date(currentYear + 1, 7, 14), endDate: new Date(currentYear + 1, 7, 14), name: 'Allégeance Oued Eddahab', description: 'Anniversaire de la récupération du province Oued Eddahab.'},
            {startDate: new Date(currentYear + 1, 7, 20), endDate: new Date(currentYear + 1, 7, 20), name: 'Révolution du Roi et du peuple', description: 'La Révolution du Roi et du Peuple est, dans l\'histoire du Maroc, la suite d\'événements qui virent notamment les autorités coloniales françaises tenter de placer Mohammed ben Arafa sur le Trône alaouite.'},
            {startDate: new Date(currentYear + 1, 7, 21), endDate: new Date(currentYear + 1, 7, 21), name: 'Fête de la jeunesse', description: 'La Fête de la Jeunesse offre l\'occasion de mettre en exergue l\'engagement constant de Sa Majesté le Roi Mohammed VI en faveur de la promotion de la place des jeunes, véritable richesse du Royaume, dans la dynamique sociétale et de leur participation politique et économique.'},
            {startDate: new Date(currentYear + 1, 10, 6), endDate: new Date(currentYear + 1, 10, 6), name: 'Anniversaire de la Marche verte', description: 'La Marche verte est une grande marche pacifique partie du Maroc le 6 novembre 1975 vers le Sahara marocain lancée par le roi Hassan II dans le but de le récupérer.'},
            {startDate: new Date(currentYear + 1, 10, 18), endDate: new Date(currentYear + 1, 10, 18), name: 'Fête de l’indépendance', description: 'Le jour de l\'indépendance ou fête de l\'indépendance est le jour commémorant l\'obtention ou la déclaration d\'indépendance.'},
            {startDate: new Date(currentYear + 1, 6, 8), endDate: new Date(currentYear + 1, 6, 8), name: '1er Moharram', description: 'premier jour du nouvel an de l\'hégire'},
            {startDate: new Date(currentYear + 1, 8, 16), endDate: new Date(currentYear + 1, 8, 16), name: 'Aïd Al Mawlid', description: 'Fête musulmane, le Mawlid commémore la naissance du prophète Mohamed.'},
            {startDate: new Date(currentYear + 1, 2, 31), endDate: new Date(currentYear + 1, 3, 1), name: 'Aïd Al Fitr', description: 'Aïd el-Fitr est la fête musulmane marquant la rupture du jeûne du mois de ramadan. Elle est célébrée le premier jour du mois de chawwal.'},
            {startDate: new Date(currentYear + 1, 5, 6), endDate: new Date(currentYear + 1, 5, 7), name: 'Aïd Al Adha', description: 'Fête religieuse musulmane commémorant le sacrifice d\'Abraham, célébrée à l\'époque du pèlerinage annuel à La Mecque.'}
        ]
    });
});
