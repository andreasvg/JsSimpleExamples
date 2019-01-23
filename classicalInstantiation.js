// constructor function, note the uppercase 'P'erson by convention:
var Person = function(name) {
    this.name = name;
};

// create instances:
var john = new Person('John');
var bobby = new Person('Bobby');

console.log(john);
console.log(bobby);

// add new functionality to all instances by adding to the prototype:
Person.prototype.sayName = function() {
    console.log(this.name);
}

john.sayName();
bobby.sayName();

// change this functionality:
Person.prototype.sayName = function() {
    console.log('Hello, my name is ' + this.name);
}

john.sayName();
bobby.sayName();