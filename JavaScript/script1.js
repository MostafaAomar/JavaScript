// single line comment

/*
multi line
comment 1
*/

/**
 * multi
 * line
 * comment 2
 */




// VARIABLEN > alter Standard
var name1 = "Jomi";
var name2 = 'Amir';

// VARIABLEN > neuer Standard
let firstName = "Maxim";
let lastName = "Serovatski";


// KONSTANTEN > einmal initialisiert, nicht veränderbar
const geburtsOrt = 'Berlin';


console.log( firstName + " " + lastName + " " + geburtsOrt);
firstName = 'Martin';
// geburtsOrt = 'Hannover'; // TYPE ERROR
console.log( firstName + " " + lastName + " " + geburtsOrt);




// MATHEMATISCHE OPERATOREN
let a = 2;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// Achtung: * vor - Rechnung
let ergebnis1 = a + b * 10;
console.log(ergebnis1);
// Kammern zuerst berechnen, dann multiplizieren.
let ergebnis2 = (a+b) * 10;
console.log(ergebnis2);




// STRING FUNKTIONEN & EIGENSCHAFTEN
let city = "   Amsterdam    ";
console.log(city.length);
console.log(city);
// Whitespace entfernten
console.log(city.trim());
console.log(city.trim().length);




// TYPEOF OPPERATOR
let test = 1;
console.log(typeof test);



// STRING CONCATINATION
let favoriteFood = 'Pizza';
let favoriteDrink = 'Bier';

const antwort = 'Mein lieblings Essen ist ' + favoriteFood + ' und am liebsten trinke ich dazu ' + favoriteDrink;
console.log(antwort);

// TEMPLATE LITERAL
console.log(
    `Mein lieblings Essen ist ${favoriteFood} und am liebsten trinke ich dazu ${favoriteDrink}`
)




/**
 * VERGLEICHSOPERATOREN
 * less than                <
 * greater than             >
 * less than or equal       <=
 * greater than or equal    >=
 * equal                    ==
 * strict equal             ===
 * not equal                !=
 */


/**
 * LOGISCHE OPERATOREN
 * and                      &&
 * or                       ||
 * NOT                      !
 */




// IF - STATEMENT
let myName = 'Micky Mouse';

if (myName == 'Micky Mouse') {
    document.write("Hallo Maus!");
}




// IF ELSE - STATEMENT
let num = '30';

if (num == 30) {
    console.log('Alexander erhaelt 30 Euro');
} else {
    console.log('Jomi erhealt 20 Euro');
}




// IF - ELSE IF - ELSE
let wetter = 'schnee';

if (wetter == 'sonnenschein') {
    console.log('Kurze Hose anziehen');
} else if(wetter == 'regen') {
    console.log('Regenschrim mitnehmen');
} else {
    console.log('Fuer dieses Wetter gibt es keinen Vorschlag');
}




// BEISPIEL LOGISCHE OPERATOREN
let human1 = 'mario';
let human2 = 'maxim';

if ((human1 == 'amir') || (human2 == 'mostafa')) {
    console.log("Ja, es ist entweder Amir oder Mostafa");
} else {
    console.log('NOPE');
}




// SWITCH
let color = 'blue';

switch (color) {
    case 'red':
        console.log('Die Frabe ist red');
        break;
    case 'blue':
        console.log('Die Farbe ist blue');
        break;
    case 'yellow':
        console.log('Die Farbe ist yellow');
        break;
    default:
        console.log('Diese Farbe kenne ich nicht.')
        break;
}




// ARRAYS > INDEX BASED ARRAYS
let colorA = [];
colorA[0] = 'red';
colorA[1] = 'blue';
colorA[2] = 'green';
colorA[3] = 'yellow';


let colorB = [
    'black',
    'white',
    'grey',
];


let colorC = new Array('limegreen', 'tomato', 'skyblue');


// ARRAY OPS

colorC.pop() // Entferne letztes Element
colorC.push(param) // Fuege am Ende hinzu


colorC.unshift(param) // Fuege am Anfang hinzu
colorC.shift() // Entferne am Anfang



// SCHLEIFEN > FOR LOOP
let personen = [
    ['mario', 'mar@io.de'],
    ['antonio', 'an@tonio.de'],
    ['maxim','ma@xim.de'],
    ['alex', 'a@b.com'],
];


for (let i = 0; i < personen.length; i++) {
    console.log(personen[i]);
}




// SCHLEIFEN > WHILE LOOP
// ...

// SCHLEIFEN > DO...WHILE LOOP
// ...

// SCHLEIFEN > FOREACH LOOP
// ...