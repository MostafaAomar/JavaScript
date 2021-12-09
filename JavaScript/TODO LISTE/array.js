'use strict'
 // Array Map
//const array1 = [1,5,7,3,9];
//console.log(array1);
//const map1= array1.map(element => element *2);
//console.log(map1);

// const nettopreis =[52,60,89,44];

// let mwst = 1.19;
// const bruttopreis = nettopreis.map(element => element * mwst);
//  console.log(bruttopreis);



//Array Filter
const namen = ['Amir ', 'Antonio', 'Alex',  'Mostafa','Max', 'Jomi'];

const langeNamen = namen.filter(element => element.length > 4 ); // from 5 characters
console.log(langeNamen);

// Array FINDINDEX
const foods= ['Tomaten', 'Gurke', 'kirchen'];

console.log(foods.indexOf('Apfel'));