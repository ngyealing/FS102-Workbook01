console.log("Please enter two numbers (the number must in range 0 - 20)");

let firstNumber = parseInt(prompt("Please enter the first number: "));

let secondNumber = parseInt(prompt("Please enter the second number: "));

console.log(`Two numbers in the ascending order: ${[firstNumber, secondNumber].sort((b, a) => b - a)}`);