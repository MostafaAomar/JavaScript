'use strict'
 //(4*3)/2  calculate tringle....(4*3) calculate rectingle .... 
 //(4*4) calculate square .... 
 //area = pi (re)*2 means radius hoch 2 => pi=3.141592 , re =12 hoch2 =>
 // re =144  ----- diameter / 2 = radius => 24/2=12 

const b = document.getElementById('Xinput').value;
const d = document.getElementById('Yinput').value;

 
function draw() {

  ctx.beginPath();
 ctx.moveTo(0, 0); //start left to right from the top, , (x direction, y direction)
ctx.lineTo(b,d); //goes left to right from the top

ctx.fill(); //important to gather the lines together
 ctx.stroke();
 }


const btn = document.createElement('button');
btn.innerHTML = 'Click me';
document.body.appendChild(btn);



btn.addEventListener('click', function(){

    const k = document.createElement('input');

    const r = document.createElement('input');

    document.body.appendChild(k);
     document.body.appendChild(r);

});