let inputNumber = parseInt(prompt("Please enter the integer number: "));
let total = [...Array(inputNumber + 1).keys()].reduce((previousValue, currentValue) => (previousValue + currentValue));

console.log(`The average from your integer number is: ${total / (inputNumber + 1)}`);