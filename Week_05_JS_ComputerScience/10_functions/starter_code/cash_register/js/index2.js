// total will store the running total, starting at 0
var total = 0;


// `enter()` reads the user's input, and updates the receipt
function enter(event){
	//prevent default functions
	event.preventDefault();

	// create variables to use later
	var input, currency;

	// Read the user input
	input = jQuery('#newEntry').val();

	// Convert to decimal
	input = parseFloat(input);

	// Convert to currency
	currency = currencyFormat(input);

	// Add line item to table
	jQuery('#entries').append('<tr><td></td><td>' + currency + '</td></tr>');

	// add it to the #total (create variable for total)
	total = total + input;

	//update the total
	jQuery('#total').text(currencyFormat(total));

	//clear out the input field
	jQuery('#newEntry').val('');

}

function currencyFormat(number) {

	var currency = parseFloat(number);

	// Round to 2 decimal places
  	currency = currency.toFixed(2);

  	// Add the $ before the number
  	currency = '$' + currency;

  	// Send back the result
  	return currency;

}

jQuery(document).ready(function(){
	jQuery('#entry').submit(enter);
});

