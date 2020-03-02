// Array syntax, collection of data that is surrounded by square brackets.
// Items inside an Array start counting from zero, Arrays are zer-based index.
// Array can consist of same or different dayatypes.
// [100, true, "hello"];
// common use is for values that are related like days of the week as written in the below example.

var daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
// Requesting a specific value inside of the array.
// Use square brackets after calling the variable with the array.
// Put the index number inside of the square brackets.
// Example myArray[7];

console.log(daysOfWeek[3]);

// You can update a value and add values as stated below.
daysOfWeek[6] = "funday";
daysOfWeek[7] = "superday";
console.log(daysOfWeek);

