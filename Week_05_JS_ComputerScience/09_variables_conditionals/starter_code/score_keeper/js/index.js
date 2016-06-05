
jQuery(document).ready(function(){

	jQuery("zero").click(function(e) {

		e.preventDefault();

		var zero = 0;

		var result = result;

	};


	jQuery("add5").click(function(e) {

		e.preventDefault();

		var add5 = 5;

		var result = add5 + result;

	};


	jQuery("add10").click(function(e) {

		e.preventDefault();

		var add10 = 10;

		var result = add10 + result;

	};

	jQuery("sub1").click(function(e) {

		e.preventDefault();

		var sub1 = -1;

		var result = sub1 + result;

	};

	jQuery("#result").text(result)



})