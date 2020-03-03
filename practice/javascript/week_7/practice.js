var myArray = [null, undefined, NaN, 0, "", false];

console.log(myArray[3]);

myArray[3] = {};

console.log(myArray);

// to empty a value, you can use a null as written below.
myArray[3] = null; 

console.log(myArray);



// Array push method. Argument provided is added to the end of the array.

myArray.push("hello there");

console.log(myArray);

// Array pop method. No argument, removes and returns the last item in the array.

var removedDataPiece = myArray.pop();

console.log(myArray);
console.log(removedDataPiece);

// Array shift method. No Argument, removes and RETURNS the first item in the array.

var removedDataPiece = myArray.shift();

console.log(myArray);
console.log(removedDataPiece);

// Array unshift method, argument provided is added to the start of the array.

myArray.unshift(1000);
console.log(myArray);

// Array length property. Returns the amount of items in the array in the form of a number.

console.log( myArray.length);



// Looping through each item of an array and console logging its value.

for (var i = 0; i < myArray.length; i++) {

    console.log(myArray[i]);

}


