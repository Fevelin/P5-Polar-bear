const colorButton = document.getElementById("color-changing-buttons");

colorButton.onclick = () => {
changeColor();
}

/**
 * function triggered every time user scrolls
 * @param {WheelEvent} event event containing the wheel scrolling parametres
 */
function mouseWheel(event) {
    changeColor();
    //delta means increment 
    //- if the user is scrolling quickly it will be higher
    const deltaWheel = event.delta * 0.5;

    offset = offset + deltaWheel;

}