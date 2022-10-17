let PositionLongitudeLatitude = document.querySelector(".position");



let testBool = true;





function DisplayBlock(DivNone) {


    testBool = testBool ? false : true;

    if (testBool == false) {
        DivNone.style.cssText = " display: block;"
    }
    else {
        DivNone.style.cssText = " display: none;"
    }
}