// Cache the DOM Queries
var body = document.getElementById("MainBody")
var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");


// Obtain the new colors and update the background
function updateBGR() {
    var newgrd = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    h3.textContent = newgrd;
    body.style.background = newgrd;
}
color1.addEventListener("input", updateBGR);
color2.addEventListener("input", updateBGR);