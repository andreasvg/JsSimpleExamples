// constructor function, note the uppercase 'P'erson by convention:
var Person = function(name) {
    this.name = name;
};

// add some functionality:
Person.prototype.sayName = function() {
    console.log(this.name);
}

// create instances:
var john = new Person('John');
var bobby = new Person('Bobby');

john.sayName();
bobby.sayName();

var Musician = function(name, instrument) {
    Person.call(this, name);    // call the parent's constructor logic
    this.instrument = instrument;

    this.play = function() {
        console.log(this.name + ' plays ' + this.instrument);
    }
}

// set up the classical inheritance:
Musician.prototype = Object.create(Person.prototype);
Musician.prototype.constructor = Person;

// create an instance:
var robben = new Musician('Robben Ford', 'guitar');
robben.sayName();   // call method on parent Person
robben.play();      // call method unique to Musician
console.log(robben.name);