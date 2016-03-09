$(document).ready(function () {
    // Full height
    
    function fix_height() {
        var heightWithoutNavbar = $("body > #wrapper").height() - 61;
        $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");

        var navbarHeigh = $('nav.navbar-default').height();
        var wrapperHeigh = $('#page-wrapper').height();

        if(navbarHeigh > wrapperHeigh){
            $('#page-wrapper').css("min-height", navbarHeigh + "px");
        }

        if(navbarHeigh < wrapperHeigh){
            $('#page-wrapper').css("min-height", $(window).height()  + "px");
        }

        if ($('body').hasClass('fixed-nav')) {
            $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
        }
    }
    $('body').addClass('simple-layout pace-done');
    $(window).bind("load resize scroll", function() {
        if(!$("body").hasClass('body-small')) {
            fix_height();
        }
    });

    setTimeout(function(){
        fix_height();
        $('.full-height-scroll').slimscroll({
        height: '100%'
    	});
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
    $(window).bind("load", function() {
        if ($("body").hasClass('fixed-sidebar') || $("body").hasClass('canvas-menu')) {
            setTimeout(function(){
                $('.sidebar-collapse').slimScroll({
                    height: '100%',
                    railOpacity: 0.9
                });
            },200);  
        }
    });
});
// Minimalize menu when screen is less than 768px
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