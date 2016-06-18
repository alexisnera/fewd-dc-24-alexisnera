jQuery(document).ready(function(){

	// Create variables - images, maximum amount of images
	var images = (['images/animal1.jpg', 'images/animal2.jpg', 'images/animal3.jpg', 'images/animal4.jpg', 'images/animal5.jpg', 'images/animal6.jpg', 'images/animal7.jpg']);
	var i = 0;
	var maxImages = images.length-1;


	// Bind the function to an on-click event
	jQuery('#buttons-wrapper #nextButton').click(nextImage);
	jQuery('#buttons-wrapper #backButton').click(prevImage);

});


// Create function for next image
	function nextImage(){
		if (i < maxImages ) { 
			i++;
		}  else  { 
			i = 0; 
		} 
		changeImage(i);
		console.log('next button works!');
	}

	//  Create function for previous image
	function prevImage(){
		if (i > 0 ) {
		 	i--;
		}  else  { 
			i = maxImages; 
		}
		changeImage(i);
		console.log('back button works!');
	}

		// Create function to change the image being displayed
		function changeImage(){
			jQuery("#image-to-vote-on").attr('src',images[i]);
		}