// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


"Hello World".includes("Hello");


"Hello World".endsWith("Hello");


"Hello World".endsWith("rld");
// "Hello World".includes("Hello");
// // the includes function is called to the string "Hello World."
// //This function evaluates if the Argument "Hello" is included in the string "Hello Word"

// // The return value is 'true'


// "Hello World".endsWith("Hello");

// // the endsWith function is called to the string "Hello World." 
// // This function evaluates if thhe string "Hello World" ends with the argument "Hello"
// // The return value is 'false'

// "Hello World".endsWith("rld");

// // the endsWith function is called to the string "Hello World."
// // This function evaluates if the string "Hello World" ends with the argument "rld"
// // the return value is 'true'



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that 

var name = "Kasandra";
console.log(name.toLowerCase());
// The toLowerCase method calls on the 'name' variable to make the  "Kasandra" lowercase. It returns "kasandra."

var city = 'Denver';
console.log(city.endsWith('Den'));
// the endsWith function calls on the 'city' variable to check if the string "Denver" starts with the argument "Den." The return value is 'false.' 

var pets = ["Bonnie", "Millie", "Archie"]
pets.pop();
console.log(pets);

// the pop method removes the last element in an array. Here it is called to the variable pets and it elimiates the last element from the array string. It returns [Bonnie, Millie]


var foods = ["Cherries", "Cheese", "Milk", "Apples"];

console.log(foods.slice(3));

// the sllice method prints out the elements in an array from a specific starting point. Here the slice method calls on the variable foods and the argument 3 specifies the position in which the elements can be printed. The return is [Apples].