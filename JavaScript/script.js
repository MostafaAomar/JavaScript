'use scrict'

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