import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let elementH1 = document.getElementById("value");

function obtenerAleatorio(arr) {
  const indice = Math.floor(Math.random() * arr.length);
  return arr[indice];
}

const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "A"]
console.log(obtenerAleatorio(numeros));

elementH1.innerHTML = obtenerAleatorio(numeros);




let elementIcono = document.querySelectorAll ("span.icon-right, span.icon-left");

function iconAleatorio (arr) {
  const indice =Math.floor( Math.random() * arr.length); 
  return arr[indice];
}
const iconArray2 =[{pinta: '♦', color: 'red'},{pinta: '♥', color: 'red'},{pinta: '♠', color: 'black'},{pinta: '♣', color: 'black'}]


let icon = iconAleatorio (iconArray2);
console.log ( icon)

elementIcono.forEach(elemento => {
  elemento.innerHTML = icon.pinta;
  elemento.style.color = icon.color;
});



