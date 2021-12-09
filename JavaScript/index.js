'use strict'

const input = document.getElementById('user-input');
const button = document.getElementById('user-btn');
const liste = document.getElementById('liste');
button.addEventListener('click', myArray);
function myArray(){
   const li = document.createElement('li');
   li.innerHTML=input.value;
 }

myArray.forEach((element) =>{
    console.log(element);
});