'use strict'

const todos = [];

const input = document.getElementById('input-box');
const btn = document.getElementById('input-btn');
const todoTbl = document.getElementById('todo-tbl');


btn.addEventListener('click', addTodo);

function addTodo() {
    todos.push(input.value);
    
    let tblBody = document.createElement('tbody');
    let row = document.createElement('tr');
    let cell = document.createElement('td');
    let cellText = document.createTextNode(input.value);

    cell.appendChild(cellText);
    row.appendChild(cell);

    tblBody.appendChild(row);
    todoTbl.appendChild(tblBody);
    
}