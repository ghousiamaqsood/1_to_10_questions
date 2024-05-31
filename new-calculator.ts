import inquirer from "inquirer";

//Asking Question from Users through Inquirer

let answer = await inquirer.prompt([
    {message: "Enter First Number",type: "number",name:"firstNumber"},
    {message: "Enter Second Number",type: "number",name:"secodNumber"},
{
    message:"Select one Operator to perform Operations",
    type: "list",
    name: "Opetator",
    Choices: ["Addition", "Subtraction", "Multiplication","DIVISION"],
}
])

console.log(answer);