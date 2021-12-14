'use strict'

// function add(a, b) {
//     return a+b;
// }
// const ergibnis = add(2,6);
// console.log(ergibnis);
// function randomNumber(multiply) {
//     return Math.floor(Math.random() * multiply);
// }

// const arr = [1,2,3,4,5,6];
// function populate(elementId, input) {
//   const list = document.getElementById(elementId);
  
//   arr.forEach(element => {
//     const li = document.createElement('li');
//     li.innerHTML = element;
//     list.appendChild(li);
//   });
  
// }
const zutaten = ['salami', 'rucola', 'Margarite', 'italian'];

const pizzaName = input => {
    const neuArr = [];

    for (const item of input) {
        const neueElemnt = item + ' Pizza';
        neuArr.push(neueElemnt);
    }
    return neuArr;
    
}
console.log(pizzaName(zutaten));