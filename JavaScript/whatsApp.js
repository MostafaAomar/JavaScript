'use strict'

let myInput=[];
const input = document.getElementById('input-user');
const button = document.getElementById('btn-user');
const reden = document.getElementById('reden');
button.addEventListener('click',myFunction);
function myFunction() {
    const h3= document.createElement('h3');
    h3.innerHTML=`${input.value}`;
    reden.appendChild(h3)
}