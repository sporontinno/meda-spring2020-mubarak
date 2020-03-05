var arguments = process.argv;

console.log("Contents of process.argv: ", arguments);



// split() only help to split strings.

function wordCount(testText) {

var testText = `GeeksforGeeks has built a gigantic network of geeks from all over the globe, through various online and offline courses. We are offering IT companies to hire talented engineers with us at no cost of acquisition. Kindly fill up this form, our team will get in touch with you regarding the same.`;

var textArray = testText.split(" ");

console.log(textArray);
console.log("The text: " + testText + "has a total of " + textArray.length + " word(s) in it.");
}


wordCount();

 // These are called string literals ``
 // These help to preserve the paragraph as is.