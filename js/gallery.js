/*Name this external file gallery.js*/

function upDate(previewPic) {
    /*Change background image's url of div with id = image to the src of previewPic*/
    document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")";
    /*Set background color of div with id = image*/
    document.getElementById("image").style.backgroundColor = "#3800A0";
    /*Change the innerhtml of div with id image to alt of previewPic*/
    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
    /*Change background image's url of div with id = image back to original image*/
    document.getElementById("image").style.backgroundImage = "url(\"\")";
    /*Set background color of div with id = image back to original color*/
    document.getElementById("image").style.backgroundColor = "#8e68ff";
    /*Change the innerhtml of div with id image back to original text*/
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
