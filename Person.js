'use strict'

// Eine Class ist ein Bauplan für ein Objekt
class Person {

    // Properties
    _firstName;
    _lastName;
    _age;
    
    // Constructor
    constructor(firstname, lastname, age) {
        this._firstName = firstname;
        this._lastName = lastname;
        this._age = age;
    }

    // Getter
    get firstName() {
        console.log(typeof (this._firstName));

        if (typeof (this._firstName) == 'string') {
            return this._firstName;
        } else {
            return 'Error, etwas stimmt mit dem Datentyp nicht.'
        }
    }

    get lastName() {
        console.log(typeof (this._lastName));

        if (typeof (this._lastName) == 'string') {
            return this._lastName;
        } else {
            return 'Error, etwas stimmt mit dem Datentyp nicht.'
        }
    }

    get age() {
        if (typeof (this._age) == 'number' && this._age >= 0) {
            return this._age;
        } else {
            return 'Error, etwas stimmt mit dem Datentyp nicht. Das Alter ist geringer als 0.';
        }
    }


    // Setter
    set firstName(fname) {
        if (typeof (fname) == 'string') {
            this._firstName = fname;
        } else {
            console.log('Error, etwas stimmt mir dem eingegebenem Parameter nicht.');
        }
    }

    set lastName(lname) {
        if (typeof (lname) == 'string') {
            this._lastName = lname;
        } else {
            console.log('Error, etwas stimmt mir dem eingegebenem Parameter nicht.');
        }
    }

    set age(age) {
        if (typeof (age) == 'number' && age > this._age) {
            this._age = age;
        } else {
            console.log('Error, etwas stimmt mit dem Datentyp nicht. Das Alter ist geringer als 0.');
        }
    }



    // Methods
    sayMyName() {
        return this.firstName + ' ' + this.lastName;
    }

    sayMyAge() {
        return this.age;
    }
};

// Anhand der Class ein Objekt instanziieren
const tim = new Person('tim', 'timbo', 20);

//////////////////////////////////// log des objects
console.log(tim);


//////////////////////////////////// firstName > set call & get call log
// set call & get call log
tim.firstName = 'Hugo';
console.log(tim.firstName);


//////////////////////////////////// lastName > set call & get call log
tim.lastName = 'Kalle';
console.log(tim.lastName);


//////////////////////////////////// age > set call & get call log
tim.age = 31;
console.log(tim.age);


//////////////////////////////////// Method call
tim.sayMyAge();

