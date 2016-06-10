jQuery(document).ready(function(){

// Create functions related to each button, creating variables for each button and the result
	// Corresponding function to buttonZero

var total = 0;

// var zro = jQuery('#zero').val('0');
// var fve = jQuery('#add5').val('5');
// var ten = jQuery('#add10').val('10');
// var ngo = jQuery('#sub1').val('-1');


	jQuery('#zero').click(function(e){
		e.preventDefault();
		total = 0;
		jQuery('#result').text(total);
		console.log("zero");
	})

	// Corresponding function to buttonFive

	jQuery('#add5').click(function(e){
		e.preventDefault();
		total = total + 5;
		jQuery('#result').text(total);
		console.log("five");
	})

	// Corresponding function to buttonTen

	jQuery('#add10').click(function(e){
		e.preventDefault();
		total = total + 10;
		jQuery('#result').text(total);
		console.log("ten");
	})

	// Call corresponding function to buttonNegOne

	jQuery('#sub1').click(function(e){
		e.preventDefault();
		total = total + -1;
		jQuery('#result').text(total);
		console.log("negative one");
	})

	
})