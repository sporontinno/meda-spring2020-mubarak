console.log("test");


// while loop "while (condition) {code}"

// A loop needs a counter so we can track how many times it has loop.
var counter = 1;

// If counter is less than 10, then...
while (counter < 10) {
    //console.log(number)

    //...console.log hello, and add a 1 to th counter.
    console.log(counter);
    console.log("hello");

    counter = counter + 1;

}


// Do While loop "do {} while ();"

var counter2 = 0;

// Do the code first
do {
    console.log("goodbye");
    counter2 = counter2 + 1;
// And then check to see if we do it again
} while (counter2 < 10);