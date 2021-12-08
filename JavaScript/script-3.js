'use strict'

// 1.	Schreibe ein Programm, das drei Variablen unterschiedlichen Typs erstellt.
//      Gebe deren Wert und Typ mit dem alert-Befehl aus.  

// let var1 = 'Ich bin ein String';
// let var2 = 2021;
// let var3 = false;

// // Template literal
// alert(`1. Variable Wert: ${var1} . Datentyp: ${typeof var1}`);
// alert(`2. Variable Wert: ${var2} . Datentyp: ${typeof var2}`);
// alert(`3. Variable Wert: ${var3} . Datentyp: ${typeof var3}`);

// // String concatination
// alert("1. Variable Wert: " + var1 + " . Datentyp: " + typeof var1);
// alert("2. Variable Wert: " + var2 + " . Datentyp: " + typeof var2);
// alert("3. Variable Wert: " + var3 + " . Datentyp: " + typeof var3);


// 2. Aufgabe	Erstelle eine Seite, die zwei Werte vom Anwender abfragt.
// Dafür sollen zwei prompt-Befehle zum Einsatz kommen. Wandele die Werte dann in
// Zahlen um https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt 
// und multipliziere diese. Geben anschließend das Ergebnis über den document.write-Befehl
//  https://developer.mozilla.org/en-US/docs/Web/API/Document/write aus. 

let eingabe1 = prompt("Erste Eingabe bitte: ");
let eingabe2 = prompt("Zweite Eingabe bitte: ");

console.log(typeof eingabe1); // noch STRING
console.log(typeof eingabe2); // noch STRING

eingabe1 = parseInt(eingabe1); // konvertiert in NUMBER
eingabe2 = Number(eingabe2); // konvertiert in NUMBER

console.log(`eingabe1: ${typeof eingabe1} / eingabe2: ${typeof eingabe2}`);

let ergebnis = eingabe1 * eingabe2;
console.log(typeof ergebnis);

document.write("Das Ergebnis der Berechnung ist: " + ergebnis);