$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Success is a Choice !!"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Coder and Developer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            900:{
                items: 3,
                nav: false
            }
        }
    });
});









const navSlide=()=>{
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    const navlinks=document.querySelectorAll('.nav-links li');
    burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
    navlinks.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation=``;
        }
        else{
        link.style.animation=`navLinkFade 0.5s ease forwards ${index/7+0.4}s`;
        console.log(index/7);}
    });
    
    
    });
    
    
    
    }
    navSlide();











    function sendEmail(){
        Email.send({
            Host : "smtp.gmail.com",
            Username : "dreamers.arena96@gmail.com",
            Password : "",
            To : 'them@website.com',
            From : "you@isp.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
    }
      let submit = document.querySelector("button-area");
      submit.addEventListener('onclick',sendEmail());