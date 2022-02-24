
document.getElementById('gogh').onclick = painterGogh
document.getElementById('dali').onclick = painterDali
document.getElementById('malczewski').onclick = painterMalczewski
document.getElementById('beksinski').onclick = painterBeksinski


function painterGogh() {
    document.querySelector('body').style.backgroundImage = 'url(img/trees-houses-fields.jpg)'
    alert("Vincent van Gogh");
}

function painterDali() {
    document.querySelector('body').style.backgroundImage = 'url(img/swan.jpg)'
    prompt("Salvador Dali");
}

function painterMalczewski() {
    document.querySelector('body').style.backgroundImage = 'url(img/kinia1.jpg)'
    document.querySelector('title').style.cssText =  `
    color: gold; 
  `;
}

function painterBeksinski() {
    document.querySelector('body').style.backgroundImage = 'url(img/beksinski-untitled.jpg)'
}