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

let scroll = document.querySelectorAll(".header-top__maina");

scroll.forEach((item) => {
  item.addEventListener("click", function Scrolleasyss(event) {
    event.preventDefault();
    let id = event.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  });
});

let linkaa = document.querySelectorAll(".service__button");

linkaa.forEach((item) => {
  item.addEventListener("click", function Scrolleasyss(event) {
    event.preventDefault();
    let id = event.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  });
});
