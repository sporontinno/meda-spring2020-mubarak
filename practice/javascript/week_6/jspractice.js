function mathifier(num1,num2) {
    
    var sum = num1 + num2;
    var newSum = sum + num1;
    var product = newSum * num2;

    return product;
}

console.log(mathifier(4,6));


function mathResults(num1, num2) {
    console.log(num1,num2);
    
    var sum = num1 + num2;
    console.log("the sum of these two numbers is " + sum); 

    var difference = num1 - num2;
    console.log("the difference of these two numbers is " + difference);
    
    var product = num1 * num2;
    console.log("the product of these two numbers is " +product);

    var divident = num1 / num2;
    console.log("the divident of these two numbers is " +divident);

    var remainder = num1 % num2;
    console.log("the remainder of these two numbers is " +remainder);

}

mathResults(1, 2);



