
//2. Alert Submit

// Utwórz plik "alertSubmit.js", który zostanie uwzględniony w dołączonym do misji pliku "alert_submit.html".

// Kiedy użytkownik klika przycisk, na ekranie powinno pojawiać się ostrzeżenie o treści "You have submitted the form!".

// Nie modyfikuj pliku HTML; cały Twój kod ma się znaleźć w pliku "alertSubmit.js"!

const subPress = document.querySelectorAll("input[type=submit]");
console.log("Dlugosc subPress to: " +subPress.length);

//if(subPress[0]) {
subPress[0].addEventListener("click", function() {
    alert("You have submitted the form!");
}) 
//}