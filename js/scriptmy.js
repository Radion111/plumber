const swiper = new Swiper(".myslider", {
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  navigation: {
    nextEl: ".buttonnext",
    prevEl: ".buttonprev",
  },
  loop: true,

  slidesPerView: 2,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    688: {
      slidesPerView: 2,
    },
  },
});

// ! Напишу поже на native JavaScript
$(document).ready(function () {
  $(".header-top__maina").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top + "px",
      },
      {
        duration: 1000,
        easing: "linear",
      }
    );
    return false;
  });
});

// burger menu

let burgermenu = document.querySelector(".burger-menu");
burgermenu.addEventListener("click", (event) => {
  event.preventDefault();
  burgermenu.classList.toggle("active");
  document.querySelector(".header-top__nav").classList.toggle("active");
  document.getElementsByTagName("body")[0].classList.toggle("lock");
});

let headertop = document.querySelectorAll(".header-top__maina");
headertop.forEach((item) => {
  item.addEventListener("click", function headerTop(event) {
    event.preventDefault();
    burgermenu.classList.remove("active");
    document.querySelector(".header-top__nav").classList.remove("active");
  });
});

// Метод ibg для картинок
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();
