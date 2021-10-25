$(document).ready(function(){
            
    $(".btn").on("click",function(){
       $(".box2").toggle("slide"); 
        
        if($(".box2").css("width") == "0px"){
            $(".box2").animate({  width: "500px" },400);
        $(".btn i").removeClass();
        $(".btn i").addClass("fas fa-minus");
        }else{
            $(".box2").animate({  width: "0px" },400);
        $(".btn i").removeClass();
        $(".btn i").addClass("fas fa-chevron-right");
        }
        
        $(".box2").hide("slide", { direction: "left" }, 1000);
        $(".box2").show("slide", { direction: "left" }, 400);
      $(".btn").css({ 'transform' : 'rotate(180deg)' });
    });
});