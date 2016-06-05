jQuery(document).ready(function(){

	// When Read More is clicked, show the rest of the paragraph
	jQuery('.readmore').click (function showReadLess(event){
		event.preventDefault();
		jQuery('#show-this-on-click').slideDown();
		jQuery('.readmore').hide();
	    jQuery('.readless').show();
	});

	// When Read Less is clicked, hide the rest of the paragraph
	jQuery('.readless').click (function showReadMore(event){
		event.preventDefault();
		jQuery('#show-this-on-click').slideUp();
	    jQuery('.readless').hide();
	    jQuery('.readmore').show();
	});

	// When Learn More is clicked, hide the rest of the paragraph and Learn More
	    jQuery('.learnmore').click (function hideLearnMore(event){
        event.preventDefault();
        jQuery('#learnmoretext').slideDown();
        jQuery('.learnmore').hide();
    });

});