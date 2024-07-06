let randNum1 = Math.floor(Math.random() * 6) + 1;
let randNum2 = Math.floor(Math.random() * 6) + 1;

let img1 = document.querySelectorAll("img")[0];

let string1 = "images/dice" + randNum1 + ".png"

img1.setAttribute("src", string1);

let img2 = document.querySelectorAll("img")[1];
let string2 = "images/dice" + randNum2 + ".png";

img2.setAttribute("src", string2);

if (randNum1 > randNum2) {
    document.querySelector("h1").textContent = "Player 1 won";
} else if (randNum1 < randNum2) {
    document.querySelector("h1").textContent = "Player 2 won";
} else {
    document.querySelector("h1").textContent = "Try again";

}