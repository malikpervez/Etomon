//calls slick function for image slider
$(document).ready(function(){
      // $('.slick-slider').slick({
      //    infinite: true,
  		  //  slidesToShow: 3,
  	   //   slidesToScroll: 1,
      //    prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/left-arrow.png'>",
      //    nextArrow:"<img class='a-right control-c next slick-next' src='./images/right-arrow.png'>"



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

  //cache the forms lookup
  var $signupForms = $('.signup-form');
  $('.signup-radio').on('change', function(e){
    var $this = $(e.target);
    console.log(e.target);
    //hide the forms that do not match the target selector
    $signupForms.not($this.data('target')).hide();
    //show the form that matches the target selector
    $signupForms.filter($this.data('target')).show();
  });

  //signup-in modal
  $('#myModal').modal({
  show: false,
  });

});





