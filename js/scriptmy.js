
const swiper = new Swiper('.myslider', {


   scrollbar: {
      el:'.swiper-scrollbar',
      draggable: true
      },
    navigation: {
     nextEl: '.buttonnext',
     prevEl: '.buttonprev',
   },
 loop:true,


slidesPerView: 2,

breakpoints: {
   "320": {
   slidesPerView:1,
   },
   "688": {
   slidesPerView:2, 
   },
},
 });



 $(document).ready(function () {

   $(".header-top__maina").click(function (e) { 
     e.preventDefault();
     $("html,body").animate({
      scrollTop: $($(this).attr("href")).offset().top+"px"
     }, {
       duration:1000,
       easing:"linear",
     });
     return false;
   });
 });




// burger menu
$(document).ready(function() {
   $('.burger-menu').click(function(event) {
      $('.burger-menu,.header-top__nav').toggleClass('active');
      $('body').toggleClass('lock');
 
   });
   $('.header-top__maina').click(function(event) {
      $('.burger-menu, .header-top__nav').deleteClass('active');
   });
   });




function ibg(){

   $.each($('.ibg'), function(index, val) {
   if($(this).find('img').length>0){
   $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
   }
   });
   }
   
   ibg();

   