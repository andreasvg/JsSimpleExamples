var human = {
    species: 'human',
    create: function(values) {
        var instance = Object.create(this);
        Object.keys(values).forEach(function(key) {
            instance[key] = values[key];
        });
        return instance;
    },
    saySpecies: function() {
        console.log(this.species);
    }
};

// inherit everything from human into musician, adding some extra functionality:
var musician = human.create({
    species: "musician",
    playInstrument: function() {
        console.log("plays..." + this.instrument);
    }
});

// inherit everything from musician (and human) into will, add some properties:
var will = Object.create(musician);
will.name = 'Will';
will.instrument = 'drums';
will.playInstrument();
will.saySpecies();

human.species = 'homo sapiens';
will.saySpecies();
