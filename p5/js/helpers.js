/** 
 * a function that translate radius and theta to html coordinates and returns x and y in an object
 */
function transformPolarToCartesian(radius, theta) {
    // calculate x and y using the cosine and sine formula
    const x = radius * cos(theta);
    const y = -radius * sin(theta);

    // store x and y inside htmlCoordinates object
    //from now on htmlCoordinates.x is the same as x
    //from now on htmlCoordinates.y is the same as y
    const cartesianCoordinates = {
        x: x,
        y: y
    }
    //return the stored data so that it can be used outside of the function
    return cartesianCoordinates;

}
function changeColor() {
    const r = random(255);
    const g = random(255);
    const b = random(255);

    fill(r, g, b);
}
/**
 * Draw a circle in the middle of the canvas
 */
function drawCircle() {
        //radius of the circle which is constant
   const radius = offset;
   // const theta = 0;

    //const cartesianCoordinates = transformPolarToCartesian(radius, theta);
    //circle(cartesianCoordinates.x, cartesianCoordinates.y, 20);//

    //circle(0, 0, 100);

    //loop trough a whole circle - 0 to 360 degrees
    for(let theta = 0; theta < 2 * 360; theta = theta + 0.1) {
        
        // get cartesian points at each step of the theta loop
        const cartesianCoordinates = transformPolarToCartesian(radius, theta);

        // draw a point in those coordinates
        circle(cartesianCoordinates.x, cartesianCoordinates.y, 8);

    }
    offset = offset - 1;
}
//offset of the spiral starts at 0
let offset = 0;

/**
 * Draw a spiral in the middle of the canvas
 */
function drawSpiral() {

    background(0, 2);

    // radius starts at zero and will increase with the formula of the spiral
    let r = 0;

    //constant of proportion between r and theta
    const k = 0.8 + offset * 0.001;
    const a = 5;
    const b = 0.01;

    //loop trough a whole circle - 0 to 360 degrees
    for(let theta = 0; theta < 100 * 360; theta = theta + 1) {

        //update r according to theta
        //r = k * theta;
        r = a * Math.exp(b * theta);

        //get the certasian coordinates
        const cartesianCoordinates = transformPolarToCartesian(r, theta + offset);

        //draw a point in those coordinates
        circle(cartesianCoordinates.x, cartesianCoordinates.y, 8);

    }

    //update offset
    offset = offset - 1;

}
/**
 * calculate radius needed at each amgle theta of the heart
 * Math.sqrt() = square root of whats inside of the parenthesis
 * Math.abs() = absolute value of whats inside of the parenthesis
 * absolute value menas if its negative make that positive, if its positive leave it as it is
 * for ex. Math.abs(-1) = 1 and Math.abs(1) = 1.
 * @param {Number} theta the angle degrees
 */
function radiusForHeart(theta) {
    const radius = 2 - 2 * sin(theta) +
        (sin(theta) * Math.sqrt(Math.abs(cos(theta)))) / (sin(theta) + 1.4);
    return radius;

}
/**
 * draw a heart
 */
function drawHeart(){
    translate(0, - 0.3 * height);

    const k = 0.8 + offset * 0.001;
    const a = 5;
    const b = 0.01;

    for(let theta = 0; theta < 360; theta = theta + 1){
        const radius = offset * radiusForHeart(theta);

        //draw cartesian coordinates
        const cartesianCoordinates = transformPolarToCartesian(radius, theta);
    
        //draw circle in x, y point
        circle(cartesianCoordinates.x, cartesianCoordinates.y, 16);
        

    }
    offset = offset - 1;

}