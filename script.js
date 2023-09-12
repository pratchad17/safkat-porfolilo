$(document).ready(function(){
    //**************************************************************/
    //********************Sticky Menu*******************************/
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY>500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    //**************************************************************/
    //********************Slide Up Button***************************/
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //**************************************************************/
    //********************Toggle Menu*******************************/
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    //**************************************************************/
    //********************Owl Carousel******************************/
    $('.carousel').owlCarousel({
        margin:20,
        loop: true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive: {
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }

    });



    //**************************************************************/
    //********************Typing Effect*****************************/
    var typed = new Typed(".typing",{
        strings:["Software Engineer","Software Designer"],
        typeSpeed:80,
        backSpeed:40,
        startDelay: 2500,
        loop:true
    });

    var typed = new Typed(".typing-name",{
        strings:["Safkat Hasin Alavi"],
        typeSpeed:120,
        showCursor: false               
    });


});