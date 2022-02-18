
// 3. Change Red

// Utwórz plik "changeRed.js", który zostanie uwzględniony w dołączonym do misji pliku "change_red.html".

// Kiedy kursor znajduje się nad kwadratem, zmienia on kolor na czerwony.

// Także w tym przypadku nie należy modyfikować pliku HTML.

const squareRed = document.getElementById("square"); //querySelector("#square");
console.log(squareRed);

// squareRed.addEventListener("mouseenter", () => console.log("Mouse enter"));
// squareRed.addEventListener("mouseleave", () => console.log("Mouse leave"));
//squareRed.addEventListener("mouseenter", () => squareRed.style.backgroundColor = "red");
squareRed.addEventListener("mousemove", () => squareRed.style.backgroundColor = "red");
//squareRed.addEventListener("mouseup", () => squareRed.style.backgroundColor = "red");
squareRed.addEventListener("mouseleave", () => alert("Mouse leave"));