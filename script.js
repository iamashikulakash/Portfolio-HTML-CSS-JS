// -- Created By @iamAshikulAkash -- +8801737916060 -🙉🙉🙉-  akashashikul@gmail.com  --

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
		// -- Created By @iamAshikulAkash -- +8801737916060 -🙉🙉🙉-  akashashikul@gmail.com  --
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
		// -- Created By @iamAshikulAkash -- +8801737916060 -🙉🙉🙉-  akashashikul@gmail.com  --
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
	// -- Created By @iamAshikulAkash -- +8801737916060 -🙉🙉🙉-  akashashikul@gmail.com  --
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
		// -- Created By @iamAshikulAkash -- +8801737916060 -🙉🙉🙉-  akashashikul@gmail.com  --
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
		// -- Created By @iamAshikulAkash -- +8801737916060 -🙉🙉🙉-  akashashikul@gmail.com  --
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
	// -- Created By @iamAshikulAkash -- +8801737916060 -🙉🙉🙉-  akashashikul@gmail.com  --
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
	// -- Created By @iamAshikulAkash -- +8801737916060 -🙉🙉🙉-  akashashikul@gmail.com  --
    var typed = new Typed(".typing", {
        strings: ["Youtuber", "Designer", "Writer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Youtuber", "Designer", "Writer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
	// -- Created By @iamAshikulAkash -- +8801737916060 -🙉🙉🙉-  akashashikul@gmail.com  --
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
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
// -- Created By @iamAshikulAkash -- +8801737916060 -🙉🙉🙉-  akashashikul@gmail.com  --
// -- Created By @iamAshikulAkash -- +8801737916060 -🙉🙉🙉-  akashashikul@gmail.com  --
// -- Created By @iamAshikulAkash -- +8801737916060 -🙉🙉🙉-  akashashikul@gmail.com  --