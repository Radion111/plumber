// для медленого скрола

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
      $('.burger-menu, .header-top__nav').toggleClass('active');
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

   
