//select element for user to change between shapes
const selectElement = document.getElementById("shape-displayed");
//store currently sidplay shape - intial is shape circle
let shapeDisplayed = "circle";
//store if shape has recently changed
let shapeChanged = false;

selectElement.onchange = (event) => {
    shapeDisplayed = event.target.value;
    console.log(shapeDisplayed);
    shapeChanged = true;

}

function setup() {
    angleMode(DEGREES);

    createCanvas(windowWidth, windowHeight);



    background(0);
    noStroke();
    changeColor();
}
  
function draw() {
    translate(width/2, height/2);

    //if shape changed, reset background
    if(shapeChanged){
        background(0);
        offset= 0;
        shapeChanged = false;
    }


    switch(shapeDisplayed) {
        //display circle
        case "circle": {
            drawCircle();
            break;
        }
        //display spiral
        case "spiral": {
            drawSpiral();
            break;
        }
        case "heart":
            drawHeart();
            break;

    }
    

   

}