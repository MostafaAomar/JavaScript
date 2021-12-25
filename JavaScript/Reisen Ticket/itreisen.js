'use strict'

const btn = document.getElementById('btn');
const price = document.getElementById('price');
const hurryUp = document.getElementById('hurryUp');
const counter = document.getElementById('counter');

let timerA;
let timerB;
let panicInterval;
let panicNumber = 10;

btn.addEventListener('click', showPrice);

// FUNCTION DECLARATION
function showPrice() {
    price.classList.remove('price');
    price.classList.add('priceShow');

    timerFunction();

}

function timerFunction() {
    clearTimeout(timerA);
    clearTimeout(timerB)

    counter.innerHTML = panicNumber;

    timerA = setTimeout(function() {
        console.log(timerA);
       hurryUp.classList.remove('hurryUp');
       
       timerB = setTimeout(function() {
           console.log(timerB);
            panicInterval = setInterval(() => {
                if (panicNumber >= 4) {
                    panicMaker();
                }
            }, 1000);
        },4000);
    }, 4000);
}

function panicMaker() {
    panicNumber--;
    counter.innerHTML = panicNumber;
}