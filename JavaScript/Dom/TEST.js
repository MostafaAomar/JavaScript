'use strict'
//**** */ ADD NEW SENTENCE BY CLICK ON THE PAGE  *******
 const ptag = document.getElementById('p-tag');
 ptag.addEventListener('click', showElemnt);
 function showElemnt() {
    const p = document.createElement('p');
    const textNo = document.createTextNode('hello people');
    p.appendChild()
 }

// ****** CHANGE THE CSS FILE STYLE ******
const item = document.getElementById('list');
if (item.hasAttribute('class')) {
   let a = item.getAttribute('class');
   
}

let mostafa =item.classList
       
item.classList.replace('list','cool');