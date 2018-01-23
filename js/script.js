//calls slick function for image slider
$(document).ready(function(){
      $('.your-class').slick({
         infinite: true,
  		   slidesToShow: 3,
  	     slidesToScroll: 3,
         prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/left-arrow.png'>",
         nextArrow:"<img class='a-right control-c next slick-next' src='./images/right-arrow.png'>"
  	     
      });
    });
//carousel function called 
$('#myCarousel').carousel({
  interval: 40000
});

//this function fethches the carousel element and cycles while binding this to the element.
$('.carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  if (next.next().length>0) {
 
      next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');
      
  }
  else {
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
     
  }
});