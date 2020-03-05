// Defines what the pyramidBuilder does. Takes in one argument.

function pyramidBuilder(height) {

    // Holds the height for the pyramid to be built.
    var pyramidHeight;

    // Check if the parameter holds a number between 1 and 20 for us.
    if (height == undefined) {
        var randomNumber = (Math.random() * 20) + 1;
        pyramidHeight = Math.floor(randomNumber);
    } else {
        // Otherwise height has a number and assign it to the pyramidHeight variable.
        pyramidHeight = height;
    }

    var pyramidRow = "";

    // loop for a certain of times, for each time, add a asterisk and then console.log the string.
    for (var i = 0; i < pyramidHeight; i++) {
        pyramidRow = pyramidRow + "**";
        console.log(pyramidRow);
    }

    // Once the first half of the pyramid is done, we need to go "down" but we need to break the string into an array.
    var pyramidArray = pyramidRow.split("");

    // Loop through the array, remove the last element of the array (to shorten the asterisk), then combine array into string, the console.log the string.
    for (var i = 0; i < pyramidHeight - 1; i++) {
        pyramidArray.pop();
        pyramidArray.pop();
        pyramidRow = pyramidArray.join("");
        console.log(pyramidRow);
    }

}


var arguments = process.argv;
console.log(arguments);
var loops = parseInt( arguments[3] );

var height = arguments[2];

height = parseInt(height);
console.log(height);

for (var i = 0; i < loops; i++) {
    pyramidBuilder(height);

}
