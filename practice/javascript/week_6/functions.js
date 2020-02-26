// intro to Functions

// Example of functions we have used so far.

console.log();
Math.round();
Math.floor();
Math.ceil();
Math.random();

// A function that belongs to a class ("library") is called a "Method".
// A variable that belongs to a class ("library") is called a "Property"

// The syntax structure of a Function definition.
function nameOfFunction() {
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
}

nameOfFunction();
nameOfFunction();

function threeTypes() {
    console.log("Hello");
    console.log(100);
    console.log(true);
}

threeTypes();



// Arguments and parameters

//"hello" is the argument
console.log("hello \n", 100, true);


// text is the parameter (variable) that will accept any data taht is given to this function.
function takeDataIn(text) {
    console.log(text);
}

takeDataIn("how are you doing");
takeDataIn("Goodbye");
takeDataIn("hello");

function takeDataIn(text1, text2) {
    console.log(text1);
    console.log(text2);
}

takeDataIn("how are you doing", "jessy");
takeDataIn("Goodbye", 1000);


function adder(number1,number2) {

    var sum = number1 + number2;

    console.log( "The sum of" + number1 + "and" + number2 + "is" + sum );
}

adder(300, 500);
