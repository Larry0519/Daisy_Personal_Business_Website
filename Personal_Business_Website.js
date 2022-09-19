$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
})
    

    // typing animation script
    let typed = new Typed(".typing",{
        strings: ["COO at GW Technology", "Co-founder at GW Technology","COO at GW Technology", "Co-founder at GW Technology"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
   