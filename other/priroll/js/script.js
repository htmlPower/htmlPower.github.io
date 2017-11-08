$(document).ready(function(){
      $('.slick').slick({
      	dots: true,
		infinite: true,
		arrows: false,
		speed: 400,
		slidesToShow: 1,
		adaptiveHeight: true
      });

      $(".checkbox-ok").change(function() {		
	   	var parentForm = $(this).parents('form:first');
		if(this.checked) 
		{parentForm.find(".but-ok").prop('disabled',false);}
		else
		{parentForm.find(".but-ok").prop('disabled',true);}
	  });
    });