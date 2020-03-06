// Function 
const fs = require("fs");

var arguments = process.argv;

// console.log("Contents of process.argv: ", arguments);
// split() only help to split strings.

// Function 1: wordcount will count the amount of words that are in the string provided in the parameter.
function wordCount(testText) {

var testText = `GeeksforGeeks has built a gigantic network of geeks from all over the globe, through various online and offline courses. We are offering IT companies to hire talented engineers with us at no cost of acquisition. Kindly fill up this form, our team will get in touch with you regarding the same.`;

var textArray = testText.split(" ");

console.log(textArray);
console.log("The text has a total of " + textArray.length + " word(s) in it.");
}

// Function 2: charCount will count the amount of characters that are in the string provided in the parameter.
function charCount(testText) {

    var testText = `GeeksforGeeks has built a gigantic network of geeks from all over the globe, through various online and offline courses. We are offering IT companies to hire talented engineers with us at no cost of acquisition. Kindly fill up this form, our team will get in touch with you regarding the same.`;
    
    var textArray = testText.split("");
    
    console.log(textArray);
    console.log("The text has a total of " + textArray.length + " character(s) in it.");
}

// Individual variables holding important parts from the terminal command.

// The actual file or text to test.
var textToTest = process.argv[4];

// Either words or characters
var textToTest = process.argv[2];

// Either file or string.
var mode = process.argv[3];

// If the mode is text then run...
if (type == "text" || type == "txt") {
    
    // An if statement that then tests whether we want to count words or characters.
    if (mode == "words" || mode == "words" || mode == "Word" || mode == "Words") {
        wordCount(textToTest);
    } else if (mode == "characters") {
        charCount(textToTest);
    // If there is no value of words or characters then we tell the user what the options are.
    } else {
        console.log("The only options for this program is 'words' or 'characters' for the second argument.");
    }
// Test if the mode is file, if it is, then run..
} else if (type == "file") {
    
    // Node function to read files.
    // This function returns a string of the contents of the file you read.
    // fs.readFile Sync("file to file", "utf8");

    var text = fs.readFileSync("filetotest.txt", "utf8");

    // check if the mode is words or characters.
    if (mode == "words" || mode == "words" || mode == "Word" || mode == "Words") {

        // if it is words, then run the wordCount function.
        wordCount(text);
    } else if (mode == "characters") {

        // If it is characters, run the charCount function.
        charCount(text);
    } else {

        // Tell the user that we can only do characters or words.
        console.log("The only options for this program is 'words' or 'characters' for the second argument.");
    }

} else  {
    // They probably mispelled the mode, or they are new to the program.
    console.log("Welcome to Paragraph Reader. \nYou can load in a string or file and test for the amount of words or characters.\nExample for loading a file and testing for words:\n'node preader.js words file filetotest.txt'\nExample for strings testing characters:\nnode preader.js characters text 'text to test'");
    console.log("Error: The type of data can only be 'text' or 'file'.");
}







 // These are called string literals ``
 // These help to preserve the paragraph as is.