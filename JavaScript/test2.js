'use strict'
let numbers = [];

const input = document.getElementById('user-input');
const button = document.getElementById('user-btn');
const liste = document.getElementById('liste');

button.addEventListener("click" ,myFunction);
 function myFunction() {
     const li = document.createElement('li');
     li.innerHTML=`${input.value}`;
     liste.appendChild(li);
 }



 function myFunction() {
var node = document.createElement("LI");
var textnode = document.createTextNode("Water");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);
}
