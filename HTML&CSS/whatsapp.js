
'use strict'

const msg =[];

const input = document.getElementById('comment');
const btn = document.getElementById('replay');
const output = document.getElementById('conversation');

//input.addEventListener('click', clear);
btn.addEventListener('click', myOutput);

// function input() {
//   input.value ='';
// } 


function myOutput() {
  
  msg.push(input.value);
  
  let messages = document.createElement('p');
  let row = document.createElement('tr');
    let cell = document.createElement('td');
    let cellText = document.createTextNode(input.value);

    cell.appendChild(cellText);
    row.appendChild(cell);

    messages.appendChild(row);
    output.appendChild(messages);
}


document.querySelector("button").addEventListener("click", function(){
  document.querySelector("output").style.display = "block";
});