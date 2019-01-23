var human = {
    species: 'human',
    saySpecies: function() {
        console.log(this.species);
    }
};

// inherit everything from human into musician, then add a new method:
var musician = Object.create(human);
musician.playInstrument = function() {
    console.log("plays..." + this.instrument);
}

// inherit everything from musician (and human) into will, add some properties:
var will = Object.create(musician);
will.name = 'Will';
will.instrument = 'drums';
will.playInstrument();
will.saySpecies();

// change functionality high up in the inheritance tree:
human.species = 'homo sapiens';

// note that this takes effect in descendants:
will.saySpecies();
