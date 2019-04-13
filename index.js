$(function(){
    let link = $('.burger');
    let close =$('.close-menu');
    let menu = $('.m-menu');
    link.on('click', function(event){
        event.preventDefault();
        menu.toggleClass('m-menu__active');
    });
    close.on('click', function(event){
        event.preventDefault();
        menu.toggleClass('m-menu__active');
    });
})