// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 

// function greeting () {
//     return "Hello"
// }
// console.log(greeting);
function greeting() {
  return "Hello"
}
var salutation = greeting()
console.log(salutation);
greeting();
  

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(name) {
  return `Hello, ${name}!`;
}
var salutation1 = customGreeting("Kasandra")
console.log(salutation1);

var saluation2 =customGreeting("Hanna")
console.log(saluation2)
  // var salutation = customGreeting()
  // console.log(salutation("Kasandra"));
  // customGreeting();



// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson(first, middle, last) {
  return `Hello, ${first} ${middle} ${last}!`;
}
var salutation3 = greetPerson("Mary", "Kate", "Olsen")
console.log(salutation3)

var salutation4 = greetPerson("Anya", "Taylor", "Joy")
console.log(salutation4)


// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(num) {
  return `The square root of 4 is ${num * num}`;
}

var exponent = square(4);


console.log(exponent);



// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.



// var quantity = checkStock
// checkStock(4, "Coffee");
// // => "Coffee is stocked"
function checkStock() {
  return "Coffee is stocked"
}
var quantity = checkStock(4)
console.log(quantity)

// checkStock(3, "Tortillas");
// // => "Tortillas - running LOW"

function checkStock1() {
  return "Tortillas -- running LOW"
}
var quantity1 = checkStock1(3)
console.log(quantity1)

// checkStock(0, "Cheese");
// // => "Cheese - OUT of stock!"
function checkStock2() {
  return "Cheese - OUT of stock!"
}
var quantity2 = checkStock2(0)
console.log(quantity2)

// checkStock(1, "Salsa");
// // => "Salsa - running LOW"

function checkStock3() {
  return "Salsa - running LOW"
}
var quantity3 = checkStock3(3)
console.log(quantity3)

