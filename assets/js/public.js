$('#menu-button').on('click',function (e) {
    e.preventDefault()
    $('#menu').animate({right:'0'},500)
    $('#back-menu').fadeIn(0);
})
$('#btn-close-menu , #back-menu').on('click',function (e) {
    e.preventDefault()
    $('#menu').animate({right:'-320px'},300)
    $('#back-menu').fadeOut(0);
})