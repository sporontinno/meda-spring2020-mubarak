function adder(num1, num2) {
    
    return num1 + num2;

}

console.log(    adder(100, "Tony") );
/*
1) 100 and Tony get sent to the Adder function.
2) Adder function runs, and places 100 and Tony, into num1 and num2.
3) Before we can return a value, we need to add/concatenate. We call num1 and num2 variables for its values, and then add/concatenate them together.
4) The return keyword says that we will return this single value back to whereever the function was called.
5) The adder function has returned "100Tony" as a single string and is replaced by that value.
6) Because this value is inside of the console.log arguments area, it will be sent off to the console.log function.
*/



function taxCalculator(itemPrice) {
    var tax = itemPrice * .085;
    var taxedFixedToTwoDecimalPlaces = tax.toFixed(2);

    return taxedFixedToTwoDecimalPlaces;
}

var laptopprice = 999.95;
var laptopTax = taxCalculator(laptopPrice);

console.log("price of item: $" + laptopPrice + ". Tax on item: " + laptopTax + ". Total Cost: $" + (laptopPrice + laptopTax) + ".";



