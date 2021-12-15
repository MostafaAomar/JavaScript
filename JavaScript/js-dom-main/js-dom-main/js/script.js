'use strict'

// // SELEKTIERE INDIVIDUELLE ELEMENT NODES
// document.getElementById();
// document.querySelector(); // Erstes Element


// // SELEKTIERE MEHRERE ELEMENTE > NODELIST > Zugriff per [index]
// document.getElementsByClassName();
// document.getElementsByTagName('div');
// document.querySelectorAll();


// // DURCHQUERE DAS DOM
// .parentNode
// .previousSibling / .nextSibling
// .firstChild / .lastChild


// // ZUGRIFF / UPDATE VON TEXT NODES
// .nodeValue


// // ENTFERNE SPEZIFISCHES ELEMENT AUS EINER LISTE
// /**
//  * 1. Hole das Element, welches geloescht werden soll.
//  * 2. Hole das Parent-Element.
//  * 3. Entferne von Parent-Element
//  */
// const removeElement = document.getElementsByTagName('li')[3];
// const ul = removeElement.parentNode;
// ul.removeChild(removeElement);


// // FUEGE ELEMENTE EINER UL HINZU
// const liste = document.getElementById('list');
// /**
//  * 1. createElement()
//  * 2. createTextNode()
//  * 3. appendChild()
//  */
// const neuesElement = document.createElement('li');
// const neuerTxtNode = document.createTextNode('Bier');
// neuesElement.appendChild(neuerTxtNode);
// liste.appendChild(neuesElement);


// // PRUEFE ATTRUBUTE
// /**
//  * 1. Hole das Element
//  * 2. Pruefe ob es ein class-attribute besitzt
//  * 3. Hole den class-name
//  */
// const item = document.getElementById('eins');

// if (item.hasAttribute('class')) {
//     let attribute = item.getAttribute('class');
//     console.log(attribute);
// }


// // ERSTELLE & ENTFERNE ATTRIBUTE

// // NOCH KEINE CLASS VORHANDEN
// item.className = 'large';
// item.setAttribute('class', 'large');

// // CLASS BEREITS VORHANDEN, FUEGE WEITERE CLASS HINZU
// item.classList.add('large')

// // ENTFERNE CLASS NAME
// item.classList.remove('hot');

// // ERSETZE CLASS-NAME
// let itemClassList = item.classList
// itemClassList.replace('hot', 'large');


// AUFGABE: ZU JEDER METHODE EINE FUNCTION SCHREIBEN.
// OB FUNCTION DECLARATION ODER ARROW FUNCTION IST EGAL.
// IM HTML WIRD EIN ELEMENT FUER JEDE FUNCTION BENOETIGT, BEI EINEM
// CLICK-EVENT, SOLL DIE FUNCTION AUFGEFUEHRT WERDEN UND DAS DOM
// SOLL MAIPULIERT WERDEN 

