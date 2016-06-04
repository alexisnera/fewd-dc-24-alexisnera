jQuery(document).ready(function(){

// When Read More is clicked, call for function that shows the rest of the paragraph
jQuery('#showone').on('click', showTextOne);
	// Set function that shows paragraph showing
	function showTextOne(event) {
		event.preventDefault();
		jQuery('#show-this-on-click').slideDown();
        jQuery('#showone').hide();
        jQuery('#hideone').show();
	}

// When Read Les is clicked, call for function that shows the rest of the paragraph
jQuery('#hideone').on('click', hideTextOne);
	//Set function to hide part of the paragraph
	function hideTextOne(event) {
		event.preventDefault();
		jQuery('show-this-on-click')).slideUp();
        jQuery('#showone').show();
        jQuery('#hideone').hide();
	}
});