function Item(col, num) {
    this.colour = col;
    this.count = num;
    this.log = function() {
        console.log("This " + this.colour + " item has a count of " + this.count);
    }
}

console.log('Running script');
var myItem1 = new Item('blue', 13);
myItem1.log();

var myItem2 = new Item('orange', 5);
Item.prototype.make = 'Gibson';
Item.prototype.logFull = function() {
    console.log("This " + this.colour + " " + this.make + " item has a count of " + this.count);
}

myItem2.logFull();
myItem1.logFull();
