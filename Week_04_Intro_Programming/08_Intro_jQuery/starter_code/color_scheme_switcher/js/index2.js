

// When gray button is clicked, background color turns gray and text turns white

	// Function: Create function that will manipulate background color to turn gray and text to white
	function grayBackground() {
		jQuery('body').css('backgroundColor', 'gray');
		jQuery('body').css('color', 'white');
	}


// When white button is clicked, background color turns white and text turns black

	// Function: Create function that will manipulate background color to turn white and text to black
	function whiteBackground() {
		jQuery('body').css('backgroundColor', 'white');
		jQuery('body').css('color','black');
	}

// Event : User clicks gray and white buttons to call on functions manipulating css

	// When gray button is clicked, call on function to change background color to gray and text to white
	jQuery('#grayButton').click(grayBackground);

	// When white button is clicked, call on function to change bacjground color to white and text to black
	jQuery('#whiteButton').click(whiteBackground);