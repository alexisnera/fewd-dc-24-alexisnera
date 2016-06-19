jQuery(document).ready(function(){

	jQuery('#menuTrigger').click(toggleMenu);

});

function toggleMenu(event) {
	event.preventDefault();
	
	if(jQuery(this).hasClass('active')){
		jQuery(this).removeClass('active');
		jQuery('.mobileMenu').slideUp();	
	} else {
		jQuery(this).addClass('active');
		jQuery('.mobileMenu').slideDown();
	}
}




