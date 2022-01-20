'use strict'

const todos = [];

const input = document.getElementById('input-box');
const btn = document.getElementById('input-btn');
const todoTbl = document.getElementById('todo-tbl');

const customBtn = document.getElementById('input-custom-btn');
customBtn.addEventListener('dblclick', addTodo);

btn.addEventListener('click', addTodo);

function addTodo() {
    // PUSH TO ARRAY
    todos.push(input.value); // Insert element into todos-array
    

    // CREATE ELEMENTS
    let tblBody = document.createElement('tbody'); // Create tbody element
    let row = document.createElement('tr'); // Create tr element
    let cell = document.createElement('td'); // Create td element
    let cellText = document.createTextNode(input.value) // Create text node

    // APPEND CHILDS
    cell.appendChild(cellText) // Append child: cell <-- cellText
    row.appendChild(cell); // Append child: row <-- cell
    tblBody.appendChild(row); // Append child: tblBody <-- row
    todoTbl.appendChild(tblBody); // Append child: table element <-- tblBody
}