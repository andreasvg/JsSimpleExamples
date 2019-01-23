// Constructor for our parent object
function Item(make, model, price) {
    this.price = price;
    this.make = make;
    this.model = model;

    this.log = function() {
        console.log('This  (' + 
        this.make + ' ' + this.model + 
        ') costs ' + this.price);
    }
}

// Constructor for our child object
function Guitar(make, model, price, strings) {
    Item.call(this, make, model, price);    // call the parent object constructor
    this.strings = strings;

    this.log = function() {
        console.log('This ' + 
                this.make + ' ' + this.model +
                ' guitar has ' +
                this.strings + ' strings and costs ' + this.price);
    }
}
// set up the prototypical inheritance:
Guitar.prototype = new Item();

// use instance of parent
var instrument = new Item('Korg', 'M1', 1000);
instrument.log();

// use instance of chile
var guitar = new Guitar('Gibson', 'Les Paul', 2000, 6);
guitar.log();
