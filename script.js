var css = document.querySelector("h3");
var firstColor = document.querySelector(".firstColor");
var secondColor = document.querySelector(".secondColor");
var body = document.body;

function setGradient(){
    var firstColorValue = firstColor.value;
    var secondColorValue = secondColor.value;
    
    body.style.background = "linear-gradient(to right, "
    + firstColorValue
    + ","
    + secondColorValue
    + ")";

    css.textContent = body.style.background + ";";
    
}

firstColor.addEventListener("input", setGradient);
secondColor.addEventListener("input", setGradient);
