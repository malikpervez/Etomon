//calls slick function for image slider
$(document).ready(function(){
      $('.slick-slider').slick({
         infinite: true,
  		 slidesToShow: 4,
  	     slidesToScroll: 1,
         prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/left-arrow.png'>",
         nextArrow:"<img class='a-right control-c next slick-next' src='./images/right-arrow.png'>"
      });
    });