
$( document ).ready(function() { 



    $(window).scroll(function(){
        var scroll =  $(window).scrollTop();
         if(scroll >= 90){ 
             $(".nav").css("background-color", "black");
         }
         else {
             $(".nav").css("background-color", "transparent");
         }
      });
     
   
    
     

   $('#submit').click(function(){
   var name = $('#text1').val();
   var proName = $('#text2').val();
   var link = $('#text3').val();
}); 


   });
    
 

   
    
    
    
    
    
    
     
    
    