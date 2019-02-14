$(document).ready(function () {
    $(".navbar-nav__link, .cover__button").click(function () {

        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = $(this.hash);
            if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"), $("body").click(), a.length) return $("html,body").animate({
                scrollTop: a.offset().top
            }, 1e3), !1
        }
    });

	if ($(window).scrollTop() > 300) {
		$(".navbar-msbr").addClass("header-conf-scroll");
	}
	
});

$(window).scroll(function() {
	
    var height = $(window).scrollTop();
    var some_number = 100;

    if ($(".navbar-msbr").hasClass("header-conf-scroll")) {
        if (height < some_number) {
            $(".navbar-msbr").removeClass("header-conf-scroll")
        }
    } else {
        if (height > some_number) {
            $(".navbar-msbr").addClass("header-conf-scroll")
        }
    }
});