$('#main-burger').click(function () {
    $('#main-menu').animate({ marginLeft: '0' }, 500);
    $('#main-menu-fon-blure').fadeIn(200);
});
$('#main-menu-fon-blure').click(function () {
    $('#main-menu').animate({ marginLeft: '-40em' }, 500);
    $('#main-menu-fon-blure').fadeOut(200);
});
$('#anter-logo-main-menu').click(function () {
    $('#main-menu').animate({ marginLeft: '-40em' }, 500);
    $('#main-menu-fon-blure').fadeOut(200);
});