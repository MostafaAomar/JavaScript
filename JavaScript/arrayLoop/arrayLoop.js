'use strict'

// Using for loop
// let myArray=[1,2,3,4];

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
    
// }

//Using forEach loop
// let myArray = [1,2,3,4];
// myArray.forEach((element) =>{
//     console.log(element);
// });
// to comment all lines strg + k + c
// to uncomment all lines strg +k+ u

//Using while loop
// let myArray= [1,2,3,4];
// let length = myArray.length;
// while (length > 0) {
//     console.log(myArray[myArray.length - length]);
//     length --;
// }

//Using do...while loop
let myArray = [1,2,3,4];
let length = myArray.length;
do {
    console.log(myArray[myArray.length - length]);
    length--;
} 
while (length > 0);