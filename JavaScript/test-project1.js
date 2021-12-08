'use strict '
let Numbers =[]; // make an array

const input = document.getElementById('user-input'); // connect input from html 
const button = document.getElementById('user-btn'); // connect button from html
const liste = document.getElementById('liste'); // connect liste from html

button.addEventListener("click",myFunction); // add a botton that works with html 
function myFunction(){
    const li = document.createElement("li"); // create a liste from input 
    li.innerHTML= `${input.value}`;
    liste.appendChild(li) // to add a new line 

}