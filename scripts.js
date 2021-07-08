//1
document.querySelector("#gen-1").innerHTML = "Generasión 1 Pokimon"
//2
let fondo = document.querySelector(".infocard-list.infocard-list-pkmn-lg").querySelectorAll(".infocard")
for (let i = 0; i < fondo.length; i++) {
    fondo[i].style.backgroundColor = "red"    
}

// Apartado 3. Imprime por consola la URL de la página.

let currURL = window.location.href;
console.log(currURL);

// Apartado 4. Imprime por consola el dominio de la página.

let currDom = window.location.hostname;
console.log(currDom);

// 5. 

for (let i = 0; i < images.length; i++) {
    document.querySelectorAll("images[i]").src   
}

// ó

function printImageNodes() {
    let imageNodes = document.querySelectorAll("div:nth-child(n) > div:nth-child(n) > span > a > img")
    console.log(imageNodes);
}

//6

function changeNicholas() {
    let photos = document.querySelectorAll("div:nth-child(n) > div:nth-child(n) > span > a > img");
    for (let i = 0; i <= photos.length; i++) {
      let photo = photos[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
      console.log(`El nombre es: ${photo}`);
    }
  }