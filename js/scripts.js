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
        Calendar.colors = ['#83CDFB', '#9CB703', '#F5BB00', '#FF8A7A', '#B56CE2', '#45A597'];
        var currentYear = new Date().getFullYear();
        calendar = new Calendar('.calendar', {
            dataSource: holidays,
            language: document.documentElement.lang,
            style: 'background',
            displayHeader: calendarDisplayHeader,
            minDate: new Date(calendarYear, 0, 1),
            maxDate: new Date(calendarYear + 1, 11, 31),
            yearChanged: function(e) {
                $('holidays-cards').addClass('d-none');
                $('#holidays_' + e.currentYear).removeClass('d-none');
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

        calendar.setYear(calendarYear);
    }
});
