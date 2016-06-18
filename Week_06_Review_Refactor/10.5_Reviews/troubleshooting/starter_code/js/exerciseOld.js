// jQuery(document).ready(function(){
    
    // function enlargeImage(event){
    // 	event.preventDefault();
    // 	jQuery('.breedContainer .toggler').attr('class','breedContainerLG');
    // 	jQuery('.toggler').attr('src', 'img/240px-Gnome-window-close.png').css('width', '24px');
    // 	jQuery()
    // }


jQuery(document).ready(function(){

    jQuery(".breedContainer .toggler").on("click",function(){
        jQuery(this).parent().toggleClass("breedContainerLG");
        if(jQuery(this).attr('src') == "img/240px-Gnome-window-close.png"){
            jQuery(this).attr('src',"img/48px-Gnome-list-add.png");
        }else{
            jQuery(this).attr('src',"img/240px-Gnome-window-close.png");
        }
    });
});

	// jQuery(".toggler").click(enlargeImage);

// });