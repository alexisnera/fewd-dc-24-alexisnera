jQuery('document').ready(function(){

function abbrFAQ() {
	jQuery('#answer1').slideToggle("slow");
}

function pronFAQ(){
	jQuery('#answer2').slideToggle("slow");
}

function plurFAQ(){
	jQuery('#answer3').slideToggle("slow");
}

jQuery('#answer1').hide();
jQuery('#answer2').hide();
jQuery('#answer3').hide();

jQuery('#question1').click(abbrFAQ);
jQuery('#question2').click(pronFAQ);
jQuery('#question3').click(plurFAQ);

console.log("hello");

})

