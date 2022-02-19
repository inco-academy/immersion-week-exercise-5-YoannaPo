
// 4. Change Color

// Utwórz plik "changeColor.js", który zostanie uwzględniony w dołączonym do misji pliku "change_color.html".

// Kiedy kursor najeżdża na nazwę koloru, kwadrat zmienia swój kolor odpowiednio.

// Example: on img

const blueS = document.querySelector("#blue");
const redS = document.querySelector("#red");
const yellowS = document.querySelector("#yellow");
const greenS = document.querySelector("#green");
const blackS = document.querySelector("#black");

const squareS =document.querySelector("#square");

blueS.addEventListener("mouseenter", () => squareS.style.backgroundColor = "blue");
redS.addEventListener("mouseenter", () => squareS.style.backgroundColor = "red");
yellowS.addEventListener("mouseenter", () => squareS.style.backgroundColor = "yellow");
greenS.addEventListener("mouseenter", () => squareS.style.backgroundColor = "green");
blackS.addEventListener("mouseenter", () => squareS.style.backgroundColor = "black");


console.log(blueS);

