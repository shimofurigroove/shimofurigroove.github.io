$(document).ready(function() {
    var $element = $('iframe');
    $($element).each(function() {
        var str = $(this).attr("src");
        if (str.match('https://www.google.com/maps/embed|https://www.youtube.com/embed|https://player.vimeo.com/video/')) {
            $(this).wrap("<div class='embed-container'></div>");
        }
        else if (str.match('https://w.soundcloud.com/player/')) {
            $(this).wrap("<div class='embed-container2'></div>");
        }
    });
});
$(function($) {
    $(window).scroll(function() {
        var offset = $(this).scrollTop() / 20;
        $('#layer1').css( 'background-position', '0px ' + offset + 'px' );
    });
});
$(function($) {
    $(window).scroll(function() {
        var offset = $(this).scrollTop() / 50;
        $('#layer2').css( 'background-position', '0px ' + offset + 'px' );
    });
});
