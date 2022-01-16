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

let linkAA = document.querySelector(".header-center__aa");

linkAA.addEventListener("click", function Scrolleasyss(event) {
  event.preventDefault();
  let id = event.target.getAttribute("href");

  document.querySelector(id).scrollIntoView({
    block: "center",
    behavior: "smooth",
  });
});
// Для форми проверка

let registration = document.querySelector(".callback__button");

// let str = "аааааА23";
// console.log(/(?=.*[0-9])(?=.*[а-я])(?=.*[А-Я])[0-9а-яА-Я]{6,16}/g.test(str));
// !интересная конструкция нужно изучить ))) ?=

registration.addEventListener("click", function Check(event) {
  let name = document.querySelector(".name-input");
  let textarea = document.querySelector(".callback__textarea");
  let tel = document.querySelector(".number-input");

  // Для имени
  if (name.value.length < 3) {
    event.preventDefault();
    name.classList.add("active");
    name.nextElementSibling.classList.add("active");
  } else if (name.value.length >= 3) {
    name.classList.remove("active");
    name.nextElementSibling.classList.remove("active");
  }
  // Для textarea
  if (textarea.value.length < 10) {
    event.preventDefault();
    textarea.classList.add("active");
    textarea.nextElementSibling.classList.add("active");
  } else if (textarea.value.length >= 10) {
    textarea.classList.remove("active");
    textarea.nextElementSibling.classList.remove("active");
  }
  // Для телефона
  // Запрос re для

  if (tel.value.search(/[a-z]/g) != -1 || tel.value.search(/[а-я]/g) != -1) {
    event.preventDefault();
    tel.classList.add("active");
    tel.nextElementSibling.nextElementSibling.classList.add("active");
  } else if (tel.value.length != 12) {
    event.preventDefault();
    tel.classList.add("active");
    tel.nextElementSibling.classList.add("active");
  } else if (
    tel.value.length == 12 &&
    (tel.value.search(/[a-z]/g) == -1 || tel.value.search(/[а-я]/g != -1))
  ) {
    tel.classList.remove("active");
    tel.nextElementSibling.classList.remove("active");
    tel.nextElementSibling.classList.remove("active");
  }
});
