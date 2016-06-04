//Implement the red light using jQuery. Don't forget to add the script tags.
jQuery('#stopButton').on('click', function switchRed();)
jQuery('#slowButton').on('click', function switchPurple();)
jQuery('#goButton').on('click', function switchGreen();)


// Turn bulb red when clicking stop btn
jQuery('#stopLight').on('click', function switchRed(){
	allBlack();
	.css('background-color', 'red');
})

// Turn bulb purple when clicking slow btn
jQuery('#slowLight').on('click', function switchPurple(){
	allBlack();
	.css('background-color', 'purple');
})

// Turn bulb green when clicking go btn
jQuery('#goLight').on('click', function switchGreen(){
	allBlack();
	.css('background-color', 'green');
})

// Turn bulbs black
jQuery('.bulb').on('click', function allBlack(){
	.css('background-color', 'black');
})