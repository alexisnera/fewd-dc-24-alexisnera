//Show more paragraph content #show-this-on-click upon clicking "Read More>" or #showone and revealing #hideone button while hiding #showone
	jQuery ('#showone').click(function(event){
		event.preventDefault()
		jQuery('#showone').hide();
		jQuery('#show-this-on-click').slideDown();
		jQuery('#hideone').show();
	})


//Hide extra paragraph content #show-this-on-click upon clicking "Read Less>" or #hideone and reveal #showone while hiding #hideone
	jQuery ('#hideone').click(function(event){
		event.preventDefault()
		jQuery('#hideone').hide();
		jQuery('#show-this-on-click').slideUp();
		jQuery('#showone').show();
	})

//Show more paragraph content #learnmoretext upon clicking "Learn More>" or .learnmore
	jQuery ('.learnmore').click(function(event){
		event.preventDefault()
		jQuery('.learnmore').hide();
		jQuery('#learnmoretext').slideDown();
	})