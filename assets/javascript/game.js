// What letters to choose from ARRAY

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// set wins,losses,etc.

var wins = 0;
var losses = 0;
var numGuesses = 9;
var pastChoices = [];

//reset when guesses left = 0

//function () {
//    left = 9;
//}

document.onkeyup = function(event) {

var userguess = event.key;

//set computerGuess = computerChoices

var computerGuess = computerChoices [Math.floor(math.random()* computerChoices.length)];

var 

//function countGuess () {}

if ( userguess == computerChoices) {
    wins++;
    numGuesses = 9;
    pastChoices = [];
}

if ( userguess != computerChoices) {
    wins--;
    numGuesses--;
    pastChoices= [];
}

else if (pastChoices === 0) {
    losses++;
   
}
}  
