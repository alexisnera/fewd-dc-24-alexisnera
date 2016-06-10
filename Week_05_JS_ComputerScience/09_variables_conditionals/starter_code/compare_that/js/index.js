
jQuery(document).ready(function(){


	jQuery("#submit").click(function(e){

		//prevent default functions to run
		e.preventDefault();

		//define the input - .val jquery script enclosed in a parseFloat
		var a = parseFloat (jQuery("#a").val());
		var b = parseFloat (jQuery("#b").val());
	
		//create a variable
		var comparison;

		//create all if and else statements for the comparison
		if (a == b) {
			comparison = "=";
		}

		else if (a > b) {
			comparison = ">";
		}

		else {
			comparison = "N/A";
		}

		//define the interactivity/action
		jQuery("#comparison").text(comparison)

	});



})