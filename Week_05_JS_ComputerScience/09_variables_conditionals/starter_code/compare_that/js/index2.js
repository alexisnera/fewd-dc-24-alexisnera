jQuery(document).ready(function(){

	// Create function that controls what symbol appears: either greater than, less than, equal, or N/A
	jQuery('#submit').click(function (e) {

		// prevent default functions to run
		e.preventDefault();

		// Create variable a
		var a = parseFloat (jQuery('#a').val());

		// Create variable b
		var b = parseFloat (jQuery('#b').val());

		// Create variable comparison
		var comparison;

		// comparison function
		if (a > b) {
			comparison = '>';
		} else if (a < b) {
			comparison = '<';
		} else if (a == b) {
			comparison = '=';
		} else {
			comparison = 'N/A';
		}

		// Display content of variable comparison
		jQuery('#comparison').text(comparison);

	});


});



