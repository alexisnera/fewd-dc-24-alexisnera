jQuery(document).ready(function(){

	var images = ['images/animal1.jpg', 'images/animal2.jpg', 'images/animal3.jpg', 'images/animal4.jpg', 'images/animal5.jpg', 'images/animal6.jpg'];

	var i=0;

	var imageSetLength = images.length-1;

	function changeImage() {
		jQuery('#image-to-vote-on').attr('src',i);
	};

	function nextImage(){
		if (i<imageSetLength) {
			i++;
		}
		else {
			i=0;
		}
		changeImage(i);
	};

	function prevImage(){
		if (i == 0) {
			i--;
		} else {
			i=imageSetLength;
		}
		changeImage(i);
	};


	jQuery('#backButton').click(prevImage);
	jQuery('#nextButton').click(nextImage);


})