#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "EnterFirstNumber", type: "number", name: "Fnumber" },
    { message: "EnterSecondNumber", type: "number", name: "Snumber" },
    { message: "Select Operation", type: "list", name: "action", choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);
if (answer.action === "Addition") {
    console.log(answer.Fnumber + answer.Snumber);
}
else if (answer.action === "Subtraction") {
    console.log(answer.Fnumber - answer.Snumber);
}
else if (answer.action === "Multiplication") {
    console.log(answer.Fnumber * answer.Snumber);
}
else if (answer.action === "Division") {
    console.log(answer.Fnumber / answer.Snumber);
}
else {
    console.log("enter your value");
}
