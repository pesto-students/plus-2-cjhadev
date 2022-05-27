//Create 3 simple functions where call, bind and apply are used. 
//The intention of this exercise isto understand how they work and their differences.

//bind function
//The bind() method creates a new function that, when called, 
//has its this keyword set to the provided value. 
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function() {
    console.log(this.getPokeName() + 'I choose you!');
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon(); // 'Pika Chu I choose you!'
//Let’s break it down. When we use the bind() method:
//the JS engine is creating a new pokemonName instance and binding pokemon as its this variable. 
//It is important to understand that it copies the pokemonName function.
//After creating a copy of the pokemonName function it is able to call logPokemon(),
//although it wasn’t on the pokemon object initially. 
//It will now recognizes its properties (Pika and Chu) and its methods.

//The main differences between bind() and call() is that the call() method:
//Accepts additional parameters as well
//Executes the function it was called upon right away.
//The call() method does not make a copy of the function it is being called on.

//call() and apply() serve the exact same purpose. 
//The only difference between how they work is that call() expects all parameters to be passed in individually, 
//whereas apply() expects an array of all of our parameters. Example:

//call function
//1.
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms

//2.
function greet(name){
    var reply = [
        'Hi, My Name is',
        name,
        this.lname
        ].join(' ')
    return reply
}
const obj = {
    lname: 'jha'
}
greet.call(obj, 'chandan'); // 'Hi, My Name is chandan jha'


//apply function
//The apply method calls a function with a given value & args provided as an array or array like object
//Example -> 1.
var numbers = [5,6,9,81,2];
var max = Math.max(numbers);
console.log(max);//undefined, cause Math.max acceptes positional arguments not array objects
//using apply function 
var max = Math.max.apply(null, numbers);
console.log(max);//81 

// Example -> 2.
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};
var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms


