const correctPin = "1234";
let userPin;

do {
    userPin = prompt("Please enter your 4-digit PIN:");
} while (userPin !== correctPin);

alert("PIN accepted! Welcome.");