'use strict'

let zahl = prompt('Bitte geben Sie eine Zahl  ein');
zahl = parseInt(zahl)

switch (zahl) {
    case 1:
        alert("Zahl 1");
        break;
    case 2:
        alert("Zahl 2");
        break;
    case 3:
        alert("Zahl 3");
        break;
    default:
        alert("Das Produkt ist nicht im Sortiment vorhanden");
        break;
}