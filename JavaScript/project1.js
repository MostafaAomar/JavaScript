'use strict'
let einkaufsListe = [];


const input = document.getElementById("user-input");
const button = document.getElementById("user-btn");
const liste = document.getElementById("liste");

button.addEventListener("click", myFunction);

function myFunction() {
   const li = document.createElement("li"); // <li></li>

   li.innerHTML = `
    ${input.value}
   `;                                       // <li>test</li>

    liste.appendChild(li)                   // <ul> <li> test </li> </ul>
}

// Hausaufgabe zur naechsten Woche

// Populate Array onclick

// Itterate over array log to console
// - for loop
// - while loop
// - do...while loop
// - foreach

// Code bei github.
// Benotung 


