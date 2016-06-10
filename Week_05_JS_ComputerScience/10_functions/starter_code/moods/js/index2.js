jQuery(document).ready(function(){
	// Listen for user input
	// Function that changes the mood ring color - if/else
	function changeMood(event) {

		event.preventDefault();

		var input = jQuery('#mood').val();

		input = input.toLowerCase().trim();

        console.log("hello");

		//if/else statements defining all possible entries
		if (input == 'excited') {
			jQuery('.moodring div').css('background', 'orange');
			jQuery('#mood').val('');
		};

		if (input == 'ecstatic') {
			jQuery('.moodring div').css('background', 'pink');
			jQuery('#mood').val('');
		};

		if (input == 'fantastic') {
			jQuery('.moodring div').css('background', 'black');
			jQuery('#mood').val('');
		};

		if (input == 'happy') {
			jQuery('.moodring div').css('background', 'yellow');
			jQuery('#mood').val('');
		};

		if (input == 'good') {
			jQuery('.moodring div').css('background', 'green');
			jQuery('#mood').val('');
		};

		if (input == 'great') {
			jQuery('.moodring div').css('background', 'blue');
			jQuery('#mood').val('');
		};

		if (input == 'bad') {
			jQuery('.moodring div').css('background', 'gray');
			jQuery('#mood').val('');
		};

		if (input == 'angry') {
			jQuery('.moodring div').css('background', 'red');
			jQuery('#mood').val('');
		};

		//clear form field - and show "Enter Your Mood" again

	}

	// Call on function to change the mood ring color when Update button is clicked.
	jQuery('#submit-btn').click(changeMood);

})

