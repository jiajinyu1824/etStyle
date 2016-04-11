// Minimalize menu when screen is less than 768px
angular.module('et.style',[]);
angular.module('et.style').directive('etstyle', etstyle);
angular.module('et.style').directive('fixed', fixed);
angular.module('et.style').directive('full', full);
angular.module('et.style').directive('canvas', canvas);
angular.module('et.style').directive('simple', simple);
$(function() {
    $(window).bind("load resize", function() {
        if ($(this).width() < 769) {
            $('body').addClass('body-small')
        } else {
            $('body').removeClass('body-small')
        }
    })
});
function SmoothlyMenu() {
    if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        $('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(
            function() {
                $('#side-menu').fadeIn(500);
            }, 100);
    } else if ($('body').hasClass('fixed-sidebar') || $('body').hasClass('canvas-menu')) {
        $('#side-menu').hide();
        setTimeout(
            function() {
                $('#side-menu').fadeIn(500);
            }, 300);
    } else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        $('#side-menu').removeAttr('style');
        
    }
}
function etstyle(){
    return {
        restrict: 'C',
        link: function(scope, element){
            $('.full-height-scroll').slimscroll({
                height: '100%'
            });
            // Collapse ibox function
            $('.collapse-link').click(function() {
                var ibox = $(this).closest('div.ibox');
                var button = $(this).find('i');
                var content = ibox.find('div.ibox-content');
                content.slideToggle(200);
                button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
                ibox.toggleClass('').toggleClass('border-bottom');
                setTimeout(function() {
                    ibox.resize();
                    ibox.find('[id^=map-]').resize();
                }, 50);
            });
            // Close ibox function
            $('.close-link').click(function() {
                var content = $(this).closest('div.ibox');
                content.remove();
            });

            setTimeout(function(){
                $('.navbar-minimalize').click(function() {
                    $("body").toggleClass("mini-navbar");
                    SmoothlyMenu();
                });
                // Close menu in canvas mode
                $('.close-canvas-menu').click(function() {
                    $("body").toggleClass("mini-navbar");
                    SmoothlyMenu();
                });
            },200);
            // Fixed Sidebar
            if ($("body").hasClass('fixed-sidebar') || $("body").hasClass('canvas-menu')) {
                setTimeout(function(){
                    $('.sidebar-collapse').slimScroll({
                        height: '100%',
                        railOpacity: 0.9
                    });
                },200);
                
            }
        }
    }  
}
//fixed-sidebar
function fixed(){
    return {
        restrict: 'C',
        link: function(scope, element){
            $('body').addClass('fixed-sidebar pace-done');
            setTimeout(function(){
                $('#side-menu').metisMenu();
            },200); 
        }
    } 
}

// Full height
function full(){
    return {
        restrict: 'C',
        link: function(scope, element){
            function fix_height() {
                var heightWithoutNavbar = $("body > #wrapper").height() - 61;
                $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");

                var navbarHeigh = $('nav.navbar-default').height();
                var wrapperHeigh = $('#page-wrapper').height();
                if(navbarHeigh > wrapperHeigh){
                    $('#page-wrapper').css("min-height", navbarHeigh + "px");
                    $('.page-content').css("min-height", navbarHeigh - 100 + "px");
                }
                if(navbarHeigh < wrapperHeigh){
                    $('#page-wrapper').css("min-height", $(window).height()  + "px");
                }

                if ($('body').hasClass('fixed-nav')) {
                    $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
                }
            }
            $('body').addClass('full-height pace-done');
            $(window).bind("load resize scroll", function() {
                if(!$("body").hasClass('body-small')) {
                    fix_height();
                }
            });
            setTimeout(function(){
                fix_height();
                $('#side-menu').metisMenu();
            },200);
        }
    }
    
}

//canvas-menu
function canvas(){
    return {
        restrict: 'C',
        link: function(scope, element){
            function fix_height() {
                var windowHeigh = $(window).height();
                var wrapperHeigh = $('#page-wrapper').height();
                var headerHeight = $('.header').height();
                var footerHeight = $('.footer').height();
                if(windowHeigh > wrapperHeigh){
                  $('#page-wrapper').css("min-height", windowHeigh + "px");
                  $('.page-content').css("min-height", windowHeigh - headerHeight - footerHeight + "px");
                }
            }
            $('body').addClass('canvas-menu pace-done');
            $(window).bind("load resize scroll", function() {
                if(!$("body").hasClass('body-small')) {
                  fix_height();
                }
            });
            setTimeout(function(){
                fix_height();
                $('#side-menu').metisMenu();
            },200);
        }
    }
    
}

//simple-layout
function simple(){
    return {
        restrict: 'C',
        link: function(scope, element){
            $('body').addClass('simple-layout pace-done');
            $(window).bind("load resize scroll", function() {
                if(!$("body").hasClass('body-small')) {
                    fix_height();
                }
            });
            setTimeout(function(){
                fix_height();
            },200);
            function fix_height() {
                var windowHeigh = $(window).height();
                var wrapperHeigh = $('#page-wrapper').height();
                var headerHeight = $('.header').height();
                var footerHeight = $('.footer').height();
                if(windowHeigh > wrapperHeigh){
                    $('#page-wrapper').css("min-height", windowHeigh + "px");
                    $('.page-content').css("min-height", windowHeigh - headerHeight - footerHeight + "px");
                }
            }
        }
    }
}
