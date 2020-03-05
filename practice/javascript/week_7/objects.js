var employeeSalaries = [10000, 20000, 30000];

console.log(employeeSalaries[1]);

var myFirstObject = {"jesse": 10000, "mark": 20000, "sara": 30000};
// property is jesse and 10000 is the value
console.log(myFirstObject.jesse);


/* An example of key values
"first_name": "Jesse" */


var person = {
    "first_name": "Jesse",
    "last_name": "Saint",
    "age": 29,
    "address": "200 happy St. Amazing City, Nebraska 23889",
    "fav_color": "blue",
    "salary": 56000,
    "phone": 48440039829
    
};

// dot notation, use period and then the property name, no spaces.
console.log(person.last_name);

// bracket notation, similar to array access, useful if properties have spaces in them.
console.log(person["phone"]);



// Example of objects within objects.
var person = {
    "first_name": "Jesse",
    "last_name": "Saint",
    "age": 29,
    "address": {
        "street": "200 happy St.", 
        "city": "Amazing City", 
        "state": "Nebraska", 
        "zip": 23889
    },
    "fav_color": "blue",
    "salary": 56000,
    "phone": 48440039829,
    "months": ["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct", "Nov", "Dec"]
};

// To call only the city object within the address object within person

console.log(person.address.city);

console.log(person.months[11]);


var employeeData = [
    {"first_name": "Dave", 
    "fav_things": ["TV","Hiking","Soccer"]},
    "myFirstFunctionInObject": function () {
        console.log("Hello from inside the employee object!!!");
    }
},
{},
{}

];

employeeData[0].fav_things[1];

employeeData[0].myFirstFunctionInObject();

// returns the number of characters within the string "david".
console.log("david".length);
console.log("david".indexOf("i"));
console.log("david".charAt(3));



