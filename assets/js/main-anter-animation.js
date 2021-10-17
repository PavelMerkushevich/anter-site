$('#main-anter-animation-block').ready(function () {
    $("#main-anter-animation").attr("src", "assets/animation/anterlogoanimation.gif");
    let clickCount = 0;
    let timeoutCount = 0;

    setTimeout(function () {
        if (clickCount == 0) {
            timeoutCount++
            $('#main-anter-animation-block').css({
                'background-color': 'rgb(0,0,0,0)',
            });

            $('#main-anter-animation').css({
                'transition': '1s',
                'width': '5em',
                'top': '-0.3em',
                'left': '45%',
            });
            setTimeout(function () {
                $('#main-c').fadeIn(300);
                $('#main-burger').fadeIn(300);
                $('#main-language-globus').fadeIn(300);
            }, 1100)
        }
    }, 2000);

    // Action for click -->

    $('#main-anter-animation-block').click(function () {
        if (clickCount == 0 && timeoutCount == 0) {
            clickCount++
            $('#main-anter-animation-block').css({
                'background-color': 'rgb(0,0,0,0)',
            });
            $('#main-anter-animation').fadeOut(300);
            setTimeout(function () {
                $("#main-anter-animation").attr("src", "assets/images/anter-logo.png");
                $('#main-anter-animation').css({
                    'transition': '1s',
                    'width': '3.8em',
                    'top': '0.28em',
                    'left': '45%',
                });
            }, 300)
            setTimeout(function () {
                $('#main-anter-animation').fadeIn(300);
                $('#main-c').fadeIn(300);
                $('#main-burger').fadeIn(300);
                $('#main-language-globus').fadeIn(300);
            }, 750)
        }
    });

});

