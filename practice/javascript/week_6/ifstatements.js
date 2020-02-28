// If-Else Statements, conditional statements

// if (condition) {}

if (true){

    console.log("This code ran if the statement was true");

}

console.log("End of script")

// Comparison operators or Comparitors
// don't use comparitors for "strings"

/*
== equal to
>= greater than or equal to
> greater than
<= lesser than or equal to
< lesser than
!= not equal to (should not equal to, to be true)
*/

var age = 22;

if (age >= 21) {
    console.log("Congratz, go get drunk");
}


var password = "ad45";

if (password=="ad45") {
    console.log("welcome");
}

// Type coercion: forces a datatype to be a another datatype.
// The follow allow type coercion: == >= <= != , 
// These do not allow type coercion: === >== <== !==

var test = "1000";

if (test === 1000) {
    console.log("alert");
}

// this statement will not run.




// If and Else parts

var sayHello = false

if (sayHello) {
    console.log("Hello");
} else {
    console.log("goodbye");
}

// this will print hello




var checkIfTrue = "0";

if (checkIfTrue) {
    console.log("The " + checkIfTrue + " value is truthy");
} else {
    console.log("The " + checkIfTrue + " value is falsy");
}




var firstBool = true;
var secondBool = false;

if (firstBool && secondBool) {
    console.log("This has runned because the condition is true.");
}

// this won't run.



var level;

// && says both sides must be true to be child
if (level > 0 && level < 18) {
    console.log("You are child");
// if not a chile, but below 0 then you are not born yet.
} else if (level < 0) {
    console.log("You are not born yet");
// if not a child, and not born yet, but between level 18 and 112, then you are an adult. 
} else if (level >= 18 && level < 112) {
    console.log("You are an adult");
// if you are not any of the previous, then you are dead.
} else {
    console.log("Thank you for living, come again next time.");
}

// this statement lacks a value, e.g var level = 15;











