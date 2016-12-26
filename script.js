$(document).ready(function() {
    $('.item .cover').each(function() {
        var this_elem = $(this);
        var transparent_box = this_elem.find('.transp-box');

        this_elem.mouseenter(function() {
            transparent_box.fadeTo(200, 1);
        });

        this_elem.mouseleave(function() {
            transparent_box.fadeTo(200, 0);
        });
    });

    var navbar = $(".navbar-fixed-top");
    var last_scroll_top;
    var is_nav_hide = false;

    $(window).scroll(function(){
        var scroll_top = $(document).scrollTop();
        if(last_scroll_top !== undefined) {
            if(last_scroll_top < scroll_top) {
                if(!is_nav_hide) {
                    is_nav_hide = !is_nav_hide;
                    navbar.animate({"top":"-=50px"}, "fast");
                }
            } else {
                if (is_nav_hide) {
                    is_nav_hide = !is_nav_hide;
                    navbar.animate({"top":"+=50px"}, "slow");
                }
            }
        }
        last_scroll_top = scroll_top;
    });

});