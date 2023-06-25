// 2) Calculator

const num1 = 8;
const num2 = 5;

const operator = "*";

switch (operator) {
    case "+":
        console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
        break;
    case "-":
        console.log(`Difference of ${num1} and ${num2} is ${num1 - num2}`);
        break;
    case "*":
        console.log(`Multification of ${num1} and ${num2} is ${num1 * num2}`);
        break;
    case "/":
        console.log(`Division of ${num1} and ${num2} is ${Math.round(num1 / num2)}`);
        break;

    default:
        console.log("Your Operator is Invalid");
        break;
}


