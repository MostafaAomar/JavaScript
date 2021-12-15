'use strict'

// const ptag = document.getElementById('p-tag');
// ptag.addEventListener('click', showElement);

// function showElement() {
//     const p = document.createElement('p');
//     const textNode= document.createTextNode('hello world');
//     p.appendChild(textNode);
//     ptag.appendChild(p);
// }
const item = document.getElementById('list');

if (item.hasAttribute('class')) {
    let attribute = item.getAttribute('class');
    //console.log(attribute);
}

let itemClassList = item.classList
//itemClassList.replace('hot', 'large');

//item.classList.add('large');
//item.classList.remove('hot');
item.classList.replace('list', 'cool');