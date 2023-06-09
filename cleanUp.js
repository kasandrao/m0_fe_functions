// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// // EX 1:
// function askForName() { console.log("Hello, what is your name?") }

// askForName()

function askForName() {
  return "Hello, what is your name?"
}

  console.log(askForName());
  askForName();

  // // added return value, reformmatted the calling of the function, adjusted console log to include call the function
// //askForName()


// // EX 2:
// function addThreeNums(first, second, third) {
// var sum = first + second + third
// return sum;
//       }

// addThreeNums(1, 2, 3);
// addThreeNums(4, 2, 7);


function addThreeNums(first, second, third) {
  var sum = first + second + third
  return first + second + third
        }
  
  console.log(addThreeNums(1, 2, 3));
  console.log(addThreeNums(4, 2, 7));
  
  addThreeNums();

  // deleted variable, called function, rewrote the return value to show the parameters being added together, included the calls of the function in console.logs


// // EX 3:
// func makeFreshPesto(){
//   console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
//   console.log("Pulse basil and pine nuts");
//   console.log("Add garlic and cheeses");
//   console.log("Slowly pour in oil");
//   console.log("Season");    }

// makeFreshPesto();

function makeFreshPesto(){

  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto(); 

// corrected Function keyword


// //  EX 4:
// function average(num1, num2) 
//   {
// var sum = num1 + num2;
//     var avg = sum / 2;

// return avg
//   }

function average(num1, num2) 
  {
var sum = num1 + num2;
    var avg = sum / 2;

return (num1 + num2)/2
  }

console.log(average(5,4));
console.log(average(9,1));
average();

// commented out the variables, added the function call, set the return value = to the calculation being returned, added two console.logs to make sure it works