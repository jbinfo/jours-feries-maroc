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

    if (holidays.length > 0) {
        var currentYear = new Date().getFullYear();
        calendar = new Calendar('.calendar', {
            dataSource: holidays,
            language: document.documentElement.lang,
            style: 'background',
            /*displayHeader: false,*/
            minDate: new Date(currentYear, 0, 1),
            maxDate: new Date(currentYear + 1, 11, 31),
            /*dataSource: function({year}) {
                // Load data from GitHub API
                return fetch('/data/holidays.json')
                    .then(result => result.json())
                    .then(result => {
                        if (result.items) {
                            return result.items.map(r => ({
                                startDate: new Date(r.startDate),
                                endDate: new Date(r.endDate),
                                name: r.name[e.calendar.options.language],
                                description: r.description[e.calendar.options.language],
                            }));
                        }
                        
                        return [];
                    })
                ;
            },*/
            yearChanged: function(e) {
                $('.accordion').toggleClass('d-none');
            },
            mouseOnDay: function(e) {
                if(e.events.length > 0) {
                    var content = '';
                    
                    for(var i in e.events) {
                        content += '<div class="event-tooltip-content">'
                                        + '<div class="event-name" style="font-weight: bold;color:' + e.events[i].color + '"><strong>' + e.events[i].name + '</strong></div>'
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
            renderEnd: function(e) {
                if (e.calendar.options.language == 'ar') {
                    $(e.target).find('.calendar-header').attr('dir', 'rtl');
                    $(e.target).find('.months-container').attr('dir', 'rtl');
                }
            }
        });
    }
});
