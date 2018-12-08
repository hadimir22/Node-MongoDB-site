$( document ).ready(function() { 

var height = $( window ).height() + 130;
  $(".hero").css("min-height", height+"px " );

 $(window).scroll(function(){
   var scroll =  $(window).scrollTop();
    if(scroll >= 90){ 
        $(".nav").css("background-color", "black");
    }
    else {
        $(".nav").css("background-color", "transparent");
    }
 });

 
 














});


