'use strict'

// let filme =[
//     [],
//     [],
//     [],
// ];

// filme[0][0]=prompt('put the name');
// filme[0][1]=prompt('put the name');

// filme[1][0]=prompt('put the name');
// filme[1][1]=prompt('put the name');

// filme[2][0]=prompt('put the name');
// filme[2][1]=prompt('put the name');

// for (let i = 0; i < filme.length; i++) {
    
//     console.log(filme[i]);
// }

let filme =[];

for (let i = 0; i < 3; i++) {
    let element =[prompt('title eingeben'), prompt('jahr eingeben')];
    filme.push(element); 
}
console.log(filme);

