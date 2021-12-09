'use strict'

// function nameToUpperCase(namen) {
//     return namen.toUpperCase();
// }

// let total1 = nameToUpperCase('mario');
// console.log(total1);

// function berechneBruttoPreis(netto, mwst) {
//     return Math.round(netto * mwst);
// }

// let total = berechneBruttoPreis(10,1.19);
// console.log(total);



'use strict'

const todos = [];

const input = document.getElementById('input-box');
const btn = document.getElementById('input-btn');
const holeBtn = document.getElementById('hole'); 
const todoTbl = document.getElementById('todo-tbl');

btn.addEventListener('click', addTodo);
holeBtn.addEventListener('click', fillArrayFromLocalStorage);

/**
 * Push user input to array.
 * Clear input-field
 * Write todos array into localStorage
 */
function addTodo() {
    todos.push(input.value); // Push element into array
    input.value = ''; // Clear input-field
    
    localStorage.setItem("unserArray", todos); // Write array into localstorage
}

/**
 * Populate todos Array with information from localStorage
 */
function fillArrayFromLocalStorage() {
    let info = localStorage.getItem("unserArray"); // Get item
    
    const newArray = info.split(','); // Convert into array

    // Fill todos array
    newArray.forEach(element => {
        todos.push(element);
    })
}
