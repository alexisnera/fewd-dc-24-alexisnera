jQuery('#grayButton').on('click', grayTheme);
jQuery('#whiteButton').on('click', whiteTheme);

function grayTheme() {
jQuery('body').css({
	'background-color' : 'gray',
	'color' : 'white'
});
}

function whiteTheme() {
jQuery('body').css({
	'background-color' : 'white',
	'color' : 'black'
});
}