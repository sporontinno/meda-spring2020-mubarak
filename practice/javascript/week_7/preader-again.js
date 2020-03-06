const fs = require("fs");

var arguments = process.argv;

// console.log("Contents of process.argv: ", arguments);
// split() only help to split strings.

function wordCount(testText) {

var testText = `GeeksforGeeks has built a gigantic network of geeks from all over the globe, through various online and offline courses. We are offering IT companies to hire talented engineers with us at no cost of acquisition. Kindly fill up this form, our team will get in touch with you regarding the same.`;

var textArray = testText.split(" ");

console.log(textArray);
console.log("The text has a total of " + textArray.length + " word(s) in it.");
}

function charCount(testText) {

    var testText = `GeeksforGeeks has built a gigantic network of geeks from all over the globe, through various online and offline courses. We are offering IT companies to hire talented engineers with us at no cost of acquisition. Kindly fill up this form, our team will get in touch with you regarding the same.`;
    
    var textArray = testText.split("");
    
    console.log(textArray);
    console.log("The text has a total of " + textArray.length + " character(s) in it.");
}

var textToTest = process.argv[4];
var textToTest = process.argv[2];
var mode = process.argv[3];

if (type == "text" || type == "txt") {
    
    if (mode == "words" || mode == "words" || mode == "Word" || mode == "Words") {
        wordCount(textToTest);
    } else if (mode == "characters") {
        charCount(textToTest);
    } else {
        console.log("The only options for this program is 'words' or 'characters' for the second argument.");
    }

} else if (type == "file") {
    
    // Node function to read files.
    // This function returns a string of the contents of the file you read.
    // fs.readFile Sync("file to file", "utf8");

    var text = fs.readFileSync("filetotest.txt", "utf8");

    if (mode == "words" || mode == "words" || mode == "Word" || mode == "Words") {
        wordCount(text);
    } else if (mode == "characters") {
        charCount(text);
    } else {
        console.log("The only options for this program is 'words' or 'characters' for the second argument.");
    }

} else  {
    console.log("Welcome to Paragraph Reader. You can load in a string or file and test for the amount of words or characters. Example for loading a file and testing for words: 'node preader.js words file filetotest.txt' Another example for strings testing characters: node preader.js characters text 'text to test'");
    console.log("The type of data can only be 'text' or 'file'.");
}







 // These are called string literals ``
 // These help to preserve the paragraph as is.