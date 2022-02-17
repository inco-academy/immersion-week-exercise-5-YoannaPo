
// 1. Hello Click

// Utwórz plik "helloClick.js", który zostanie uwzględniony w dołączonym do misji pliku "hello_click.html".

// Kiedy użytkownik klika przycisk, w konsoli powinny pojawiać się słowa "Well, hello there!".

// Nie modyfikuj pliku HTML; cały Twój kod ma się znaleźć w pliku "helloClick.js"!

const hel = document.getElementById("hello");

if(hel) {
    console.log(hel +"Hel jest widoczny");
    hel.addEventListener("click", function() {
        console.log("Well, hello there!");
    })
}

