var myString = "Hello there how are you?";

console.log(myString.length);


// split helps to split each character in a string.
var myStringArray = myString.split("");

console.log(myStringArray);


// manually replace the question mark.

console.log(myStringArray[23]);

// this replaces the ? with . (period)
myStringArray[23] = ".";

console.log(myStringArray);

// deletes the last character in a string
myStringArray.pop();
myStringArray.pop();

// deletes the first character in a string
myStringArray.shift();
myStringArray.shift();


// join helps to join splitted characters in a string.
var finishedString = myStringArray.join("");

console.log(finishedString);