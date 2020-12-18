$(function(){
    
    $('.header-slider').slick({
        arrow: false,
        prevArrow: '<img class="arrows arrows-right" src="images/arrows-right.svg"></img>',
        nextArrow: '<img class="arrows arrows-left" src="images/arrows-left.svg"></img>',
    });

    $('.client-slider').slick({
        arrow: false,
        prevArrow: '<img class="arrow arrow-right" src="images/arrows-right.svg"></img>',
        nextArrow: '<img class="arrow arrow-left" src="images/arrows-left.svg"></img>',
    });

    new WOW().init();
    

});