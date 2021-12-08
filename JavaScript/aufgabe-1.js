'use strict'

// Schreibe ein Programm das die Datensätze von drei Filmen aufnimmt. 
// Jeweils den Filmtitel und das Veröffentlichungsjahr.
// Du benötgst ein Array, welches drei weitere, leere Arrays enthält. 
// Wiederhole die Abfrage drei mal, sodass alle verschachtelten Arrays befüllt sind.
// Gebe danach das äußere mit allen inneren Arrays per console.log aus.


let filme = [
    [],
    [],
    [],
];

filme[0][0] = prompt('Gebe Filmtitel ein');
filme[0][1] = prompt('Veroeffentlichungsjahr eingeben');

filme[1][0] = prompt('Gebe Filmtitel ein');
filme[1][1] = prompt('Veroeffentlichungsjahr eingeben');

filme[2][0] = prompt('Gebe Filmtitel ein');
filme[2][1] = prompt('Veroeffentlichungsjahr eingeben');

for (let i = 0; i < filme.length; i++) {
    console.log(filme[i]);
}


// ARRAY OPS - BEISPIELE
console.log(filme);

filme.unshift(["Ein Array"]);
console.log(filme);

filme.shift();
console.log(filme);


// ANDERE LOESUNG
let filme = [];

for (let i = 0; i < 3; i++) {
    let element = [prompt('Titel eingeben'),prompt('Jahr eingeben')];

    filme.push(element);
}

for (let i = 0; i < filme.length; i++) {
    console.log(filme[i]);
}