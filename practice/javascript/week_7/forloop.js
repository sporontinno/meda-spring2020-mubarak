var counter = 0;

while (counter < 10) {
    // code to run per loop.
}

for () {

    // code to run per loop.
}



var counter = 0;

while (10 > counter) {
    //code to run per loop
    counter = counter + 1;
    console.log(counter);

    // the ++ will add a 1 to the existing variable value;
    // counter++;

    // The -- will subtract a 1 to the existing variable value;
    // counter--;

}




// "for loop" is a shorthand
// inside the parentheses we have three parts: counter, condition, and code that changes the counter. The third part only runs after the code block.

for (var counter = 0; 10 > counter; counter = counter + 1) {
    console.log("counter");
}




//shorthand for "for loop"
// outer loop wil run for 10 times, for each time we are executing another loop that will itself run 10 times.
var special = 1;

for (var a = 0; i < 10; i++) {

    // The inner loop that will run once (ten times).
    for (var e = 0; e < 10; e++) {
        
        console.log("running!" + special);
        special++;
        
    }
}



