#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// console.log(answer)
//conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select valid number");
}
console.log("The End");
console.log("The end");
console.log("The Endend");
console.log("The Endeend");
