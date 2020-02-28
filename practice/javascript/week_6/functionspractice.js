// Concatenation example

"a word" + "gabe";
"a number" + 100;
"hello" + true;
100 + "a number";

100 + 100 + 100 + "hello";
// returns 300hello

"hello" + 100 + 100 + 100;
// returns hello100100100

function sentenceBuilder(person, place, action, item) {
    var firstPart =  "went to the ";
    var secondPart = ", and did ";
    var thirdPart = "but there was a problem, ";
    var fourthPart = "did not work.";

    var completeSentence = person + firstPart + place + secondPart + action + thirdPart + item + fourthPart;

    console.log(completeSentence);
}

sentenceBuilder("Dybala", "Juventus", "to play with the team", "his shoes");


/*
"________ went to the ________, and did _______ but there was a problem, _______ did not work";
*/


function getNumber() {
    var theSpecialNumber = 42;

    return theSpecialNumber;
}

console.log( getNumber() / 50);




function getName() {
    
    var firstName = "Eduardo";

    return firstName;
}

console.log( getName() + " is a person.");








