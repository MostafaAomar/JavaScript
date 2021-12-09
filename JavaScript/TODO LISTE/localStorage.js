// open broweser and click on Application
// key : value

'use strict'

const namen = [];
localStorage.setItem('firstname', 'Mostafa');
localStorage.setItem('Lastname', 'Alomar');

let info = localStorage.getItem('firstname');
//delete an item
//localStorage.removeItem('lastname');
document.write(info)