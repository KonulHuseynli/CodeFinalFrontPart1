function handle(delta) {
    var time = 1000;
    var distance = 1600;

    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
}