$(document).ready(function () {
    $(window).scroll(function () {
      // sticky navbar on scroll script
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      // scroll-up button show/hide script
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });

    
  
    // slide-up script
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      // removing smooth scroll on slide-up button click
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      // applying again smooth scroll on menu items click
      $("html").css("scrollBehavior", "smooth");
    });

    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    // typing text animation script
    var typed = new Typed(".typing", {
      strings: ["Back-End Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    var typed = new Typed(".typing-2", {
      strings: ["Back-End Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    // owl carousel script
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
  });


let overstock_git = () => {
    window.open("https://github.com/vishqaz/Overstock", "_blank");
}
let overstock_site = () => {
    window.open("https://mellifluous-licorice-2028e5.netlify.app/", "_blank");
}
let myhour_git = () => {
    window.open("https://github.com/sushank678/mutual-cart-3380", "_blank");
}
let myhour_site = () => {
    window.open("https://silver-sfogliatella-0c9664.netlify.app/", "_blank");
}
let redbus_git = () => {
    window.open("https://github.com/Abhay0123/ripe-theory-3388", "_blank");
}
let redbus_site = () => {
    window.open("https://phenomenal-kleicha-acfce4.netlify.app/", "_blank");
}


  let gotoprojects = () => {
    var el = document.getElementById("projectlist");
    el && el.scrollIntoView(true);
    window.scrollBy(0, 2650);
}