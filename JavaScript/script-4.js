'use strict'

// 1.	Schreibe ein Programm, das drei Variablen unterschiedlichen Typs erstellt.
//      Gebe deren Wert und Typ mit dem alert-Befehl aus.  

let var1 = 'Ich bin ein String';
let var2 = 2021;
let var3 = false;

// Template literal
alert(`1. Variable Wert: ${var1} . Datentyp: ${typeof var1}`);
alert(`2. Variable Wert: ${var2} . Datentyp: ${typeof var2}`);
alert(`3. Variable Wert: ${var3} . Datentyp: ${typeof var3}`);

// String concatination
alert("1. Variable Wert: " + var1 + " . Datentyp: " + typeof var1);
alert("2. Variable Wert: " + var2 + " . Datentyp: " + typeof var2);
alert("3. Variable Wert: " + var3 + " . Datentyp: " + typeof var3);
