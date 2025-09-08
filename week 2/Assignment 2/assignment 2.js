// Declare variables with appropriate data types
let personName = "Alice";
let personAge = 30;
let isStudent = false;

// Log values and data types
console.log("Name:", personName, "Data Type:", typeof personName);
console.log("Age:", personAge, "Data Type:", typeof personAge);
console.log("Is Student:", isStudent, "Data Type:", typeof isStudent);
// Declare two number variables
let num1 = 20;
let num2 = 5;

// Perform and log each operation
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// Declare a string variable
let sentence = "JavaScript is a powerful language.";

// Log string properties
console.log("Length of sentence:", sentence.length);
console.log("First character:", sentence[0]);
console.log("Last character:", sentence[sentence.length - 1]);

// Declare a variable with a negative number
let negativeNumber = -16;

// Use Math object methods and log results
console.log("Square root (of its absolute value):", Math.sqrt(Math.abs(negativeNumber)));
console.log("Squared:", negativeNumber * negativeNumber); 
console.log("Absolute value:", Math.abs(negativeNumber));

// Declare two number variables
let a = 10;
let b = 25;

// Log comparison results
console.log("Is a > b?", a > b);
console.log("Is a < b?", a < b);
console.log("Is a === b?", a === b);

// Declare two boolean variables
let isSunny = true;
let isWarm = false;

// Log logical operations
console.log("Logical AND (isSunny && isWarm):", isSunny && isWarm);
console.log("Logical OR (isSunny || isWarm):", isSunny || isWarm);
console.log("Logical NOT (!isSunny):", !isSunny);

// Declare name variables
let firstName = "John";
let lastName = "Doe";

// Create and log a greeting message using template literals
let greeting = `Hello, my name is ${firstName} ${lastName}.`;
console.log(greeting);