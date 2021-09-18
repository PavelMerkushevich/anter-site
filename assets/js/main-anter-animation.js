$('#main-anter-animation-block').ready(function () {
    $("#main-anter-animation").attr("src", "assets/animation/antersiteanim.gif");
    setTimeout(function () {
        $('#main-anter-animation-block').fadeOut(600);
        $('#main-anter-animation').slideUp(500);
    }, 2000);
    // Action for click -->
    $('#main-anter-animation-block').click(function () {
        $('#main-anter-animation-block').fadeOut(600);
        $('#main-anter-animation').slideUp(500);
    });
});




// function test() {
//     $("#anter-animation").css('background-color', 'blue');
// }
// function myTransition2() {
//     var elem = document.getElementById("anter-animation");
//     elem.style.backgroundColor = "red";
//     elem.style.width = '50px';
//     elem.style.height = '50px';
// }
// function myTransition() {
//     var elem = document.getElementById("anter-animation");
//     elem.style.backgroundColor = "orange";
//     elem.style.width = '100px';
//     elem.style.height = '100px';
// }
// function myMove() {
//     var elem = document.getElementById("anter-animation");
//     var pos = 0;
//     var id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 350) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }
