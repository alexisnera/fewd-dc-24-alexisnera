// When #stopButton light is clicked, turn off all lights then turn on #stopLight

jQuery('#stopButton').click(function(){
	jQuery('.bulb').css('background', 'black');
	jQuery('#stopLight').css('background', 'red');
})

// When #slowButton light is clicked, turn off all lights then turn on #slowLight
jQuery('#slowButton').click(function(){
	jQuery('.bulb').css('background', 'black');
	jQuery('#slowLight').css('background', 'yellow');
})

// When #goButton light is clicked, turn off all lights then turn on #goLight
jQuery('#goButton').click(function(){
	jQuery('.bulb').css('background', 'black');
	jQuery('#goLight').css('background', 'green');
})

