/* ----------------------------------------------------------------------
In this example we instantiate a new object using the classical technique
and extend its functionality by later adding to the prototype.
---------------------------------------------------------------------- */

// create our basic object constructor function:
function Item(col, num) {
    this.colour = col;
    this.count = num;
    this.log = function() {
        console.log("This " + this.colour + " item has a count of " + this.count);
    }
}

// create an instance and use it:
var myItem1 = new Item('blue', 13);
myItem1.log();

// create a second instance:
var myItem2 = new Item('orange', 5);

// now extend the prototype by adding a property and method:
Item.prototype.make = 'Gibson';
Item.prototype.logFull = function() {
    console.log("This " + this.colour + " " + this.make + " item has a count of " + this.count);
}

// note that both instances have access to the new functionality;
myItem2.logFull();
myItem1.logFull();
