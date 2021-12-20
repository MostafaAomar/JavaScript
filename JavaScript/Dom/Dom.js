'use strict'
//**** */ ADD NEW SENTENCE BY CLICK ON THE PAGE  *******
// const ptag = document.getElementById('p-tag');
// ptag.addEventListener('click', showElement);

// function showElement() {
//     const p = document.createElement('p');
//     const textNode= document.createTextNode('hello world');
//     p.appendChild(textNode);
//     ptag.appendChild(p);
// }
// ****** CHANGE THE CSS FILE STYLE ******
const item = document.getElementById('list');

if (item.hasAttribute('class')) {
    let attribute = item.getAttribute('class');
    //console.log(attribute);
}
let itemClassList = item.classList
//item.classList.add('large');
//item.classList.remove('hot');
item.classList.replace('list', 'cool');

//******** */