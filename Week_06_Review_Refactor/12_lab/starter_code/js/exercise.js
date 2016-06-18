function selectPet(petType){

    // Get the specific pet data set
    var thisPetData = petData[petType];

    // Set the title
    jQuery('.petDisplayName').text(thisPetData.displayName);

    // Empty the specification data
    jQuery('.petsDataSpecs').empty();

    // Add the space required, size, weight
    var dataItems = '';
    dataItems += '<dt>Space Required</dt><dd>' + thisPetData.spaceRequired + '</dd>';
    dataItems += '<dt>Size</dt><dd>' + thisPetData.size + '</dd>';
    dataItems += '<dt>Weight</dt><dd>' + thisPetData.weight + '</dd>';

    // Add logic to add the trainability and lap size images

    if (thisPetData.trainability == true) {
        dataItems = '<dt>Trainability</dt><dd><img src=img/200px-Gnome-emblem-default.svg.png></dd>';
    } else {
        dataItems = '<dt>Trainability</dt><dd><img src=200px-Gnome-emblem-unreadable.svg.png></dd>';
    }

    // Add logic to fitsOnLap
    if (thisPetData.fitsOnLap == true) {
        dataItems = '<dt>Trainability</dt><dd><img src=img/200px-Gnome-emblem-default.svg.png></dd>';
    } else {
        dataItems = '<dt>Trainability</dt><dd><img src=200px-Gnome-emblem-unreadable.svg.png></dd>';
    }

    jQuery('.petsDataSpecs').append(dataItems);

    // Add the foods (may require loop)

    var food = '<dt>Foods</dt><dd><ul><li>' + thisPetData.foods[0] + '</li></ul></dd>';

    jQuery('.petsDataSpecs').append(food);

    // Update the images

        // Set the main image
        jQuery('.photoLarge').attr('src', thisPetData.images[0].img);
        jQuery('.photoLarge').attr('alt', thisPetData.images[0].alt);

        // Empty the thumbnails
        jQuery('.thumbHaus').empty();

        // Add the thumbnails
        var thumbLink='';

        for(var thumbLink=0, thumbLink<thisPetData.images.length; thumbLink++) {

            thumbLink = '<a href=' + thisPetData.images.img + '><img class="photoThumb" alt="" src="'thisPetData.images.img'"/></a>';
            jQuery('.thumbHaus').append('<a href=' + thisPetData.images.img.length + '>');

        };

        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)
        jQuery('a .photoThumb').click('thumbLink');


    // Empty the ideal for
    jQuery('.idealFor').empty();

    // Insert the ideal for
    var idealPetOwner=0;
    for(var idealPetOwner=0, idealPetOwner<thisPetData.idealOwner; idealPetOwner++) {
        idealPetOwner = '<li>' + thisPetData.idealOwner[0] + '</li>';
    }
    jQuery('.idealFor').append(idealPetOwner);


    // Empty the Adoption Groups
    jQuery('.adoptionGroups').empty();

    // Add the adoption groups
    var adoptFrom=0;
    for(var adpt=0; adpt<thisPetData.adoption; adpt++) {
        adoptFrom = '<li><a href=' + thisPetData.adoption.url[adpt] + ' target=_blank alt=' + thisPetData.adoption.name[adpt] + '</li>';
    }
    jQuery('.adoptionGroups').click(adoptFrom);


}// end selectPet



jQuery(document).ready(function(){

    // Initial run
    selectPet(jQuery("#petType").val());

    //Update whenever a new value is picked
    jQuery("#petType").change(function(){
        var petType = jQuery(this).val();
        selectPet(petType);
    });


});