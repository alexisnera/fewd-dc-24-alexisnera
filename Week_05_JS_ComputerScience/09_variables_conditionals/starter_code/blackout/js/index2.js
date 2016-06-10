jQuery(document).ready(function(){

// Upon clicking Light Switch button #light_switch background color changes to either white or black depending on current background color

	var axl = 'on'

	console.log("variable creation successful");

	function switchLights() {
			if (axl == 'on') {
				jQuery('body').addClass('dark');
				axl = 'off';
			}
			else {
				jQuery('body').removeClass('dark');
				axl = 'on';
			}

	}

	jQuery('#light_switch').click(switchLights);

});

