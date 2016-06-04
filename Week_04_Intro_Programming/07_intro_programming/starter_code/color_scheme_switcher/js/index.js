
// Click on Grey Button
document.getElementById('grayButton').onclick = changeToGray;
	// call changeToGrey

// Click on White Button
document.getElementById('whiteButton').onclick = changeToWhite;
	// call changeToWhite



function changeToGray() {
	//Change background color
	document.body.style.backgroundColor = 'gray';
	//Change text color	
	document.body.style.color = 'white';
	console.log = ("gray");
} // end changeToGrey()

function changeToWhite() {
	//Change background color
	document.body.style.backgroundColor = 'white';
	//Change text color
	document.body.style.color = 'black';
	console.log = ("white");
} // end changeToWhite()



