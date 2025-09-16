let userNumber = parseInt(prompt("Enter a number for the multiplication table:"));

for (let i = 1; i <= 10; i++) {
    const product = userNumber * i;
    if (product % 5 === 0) {
        continue;
    }
    console.log(`${userNumber} x ${i} = ${product}`);
}