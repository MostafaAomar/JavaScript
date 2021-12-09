'use strict'

const todos = [];

const input = document.getElementById('input-box');
const btn = document.getElementById('input-btn');

btn.addEventListener('click', addTodo);

function addTodo() {
    todos.push(input.value);
    console.log(todos);
}