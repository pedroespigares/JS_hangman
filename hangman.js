let arrayPalabras = [
  "Madrid",
  "Granada",
  "Berlin",
  "Paris",
  "Tokio",
  "Viena",
  "Praga",
  "Londres",
  "Roma",
  "Amsterdam",
];

let palabra = arrayPalabras[Math.floor(Math.random() * arrayPalabras.length)];

palabra = palabra.toLowerCase();

let letras = palabra.split("");

let contadorAciertos = 0;

let totalVidas = 10;

window.onload = () => {
  // Crea un div por cada letra de la palabra

  let divLetra = document.getElementById("userChoice");
  for (let i = 0; i < palabra.length; i++) {
    let span = document.createElement("span");
    span.className = "letraElegida";
    span.innerHTML = "_";
    divLetra.appendChild(span);
  }

  let spanLetras = document.getElementsByClassName("letter");

  // Crea un evento para cada span de letra

  for (let i = 0; i < spanLetras.length; i++) {
    spanLetras[i].addEventListener("click", (e) => {

      if(totalVidas > 0){

      let letra = e.target.innerHTML;
      let letraEncontrada = false;
      for (let j = 0; j < letras.length; j++) {
        
        // Si la letra está en la palabra, la muestra y cambia letraEncontrada a true

        if (letra == letras[j]) {
          let span = document.getElementsByClassName("letraElegida")[j];
          span.innerHTML = letra;
          letraEncontrada = true;
          contadorAciertos++;
        } 
      }

      // Si la letra no está en la palabra, resta una vida

      if (!letraEncontrada) {
        totalVidas--;
        document.getElementById("vidas").innerHTML = totalVidas;
        e.target.style.opacity = "0%";
        e.target.style.cursor = "default";
      } else{
        e.target.style.backgroundColor = "green";
        e.target.style.cursor = "default";
        e.target.style.color = "white";
      }

      if (totalVidas == 0){
        let mensajeVidas = document.getElementById("mensajeVidas");
        mensajeVidas.innerHTML = "You lost!";
        mensajeVidas.style.backgroundColor = "red";
        mensajeVidas.style.padding = "10px";
        mensajeVidas.style.borderRadius = "5px";
        mensajeVidas.style.color = "white";
        mensajeVidas.style.fontWeight = "bold";
        mensajeVidas.style.marginLeft = "450px";
        mensajeVidas.style.marginRight = "450px";
      }

      if(contadorAciertos == palabra.length){
        let mensajeVidas = document.getElementById("mensajeVidas");
        mensajeVidas.innerHTML = "You won!";
        mensajeVidas.style.backgroundColor = "green";
        mensajeVidas.style.padding = "10px";
        mensajeVidas.style.borderRadius = "5px";
        mensajeVidas.style.color = "white";
        mensajeVidas.style.fontWeight = "bold";
        mensajeVidas.style.marginLeft = "450px";
        mensajeVidas.style.marginRight = "450px";
      }
    }
    });
  }
};
