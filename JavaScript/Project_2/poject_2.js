'use strict'

//const inhalt=[];

const input = document.getElementById('user-input');
const button = document.getElementById('user-btn');
const output = document.getElementById('output');

button.addEventListener('click', myButton);

function myButton() {
    const randomNumber = Math.floor(Math.random()*5);
    console.log(randomNumber);
    // let theAnswers ='';

    // switch (randomNumber) {
    //     case 0:
    //         theAnswers = 'I am sure';
    //         break;
    //     case 1:
    //         theAnswers= 'I do not know';
    //         break;
    //     case 2:
    //         theAnswers = 'Dont bother you';
    //         break;
    //     case 3 :
    //         theAnswers = 'Do what you want';
    //         break;
        
    //     default:
    //         theAnswers= 'go away';
    //         break;
    // }
    // output.innerHTML = theAnswers;
    // let userQuestions = input.value;
    // input.value= '';
    // output.innerHTML= `Your Questin is : ${userQuestions} . The Answer your Question ist ${theAnswers}`;
}
