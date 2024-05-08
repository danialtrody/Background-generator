let css = document.querySelector("h3");
let firstColor = document.querySelector(".firstColor");
let secondColor = document.querySelector(".secondColor");
let body = document.body;

function setGradient(){
    let firstColorValue = firstColor.value;
    let secondColorValue = secondColor.value;
    
    body.style.background = "linear-gradient(to right, "
    + firstColorValue
    + ","
    + secondColorValue
    + ")";

    css.textContent = body.style.background + ";";
    
}

firstColor.addEventListener("input", setGradient);
secondColor.addEventListener("input", setGradient);
