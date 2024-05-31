"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
//Asking Question from Users through Inquirer
let answer = await inquirer_1.default.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secodNumber" },
    {
        message: "Select one Operator to perform Operations",
        type: "list",
        name: "Opetator",
        Choices: ["Addition", "Subtraction", "Multiplication", "DIVISION"],
    }
]);
console.log(answer);
