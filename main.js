#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: `todo`,
            type: "input",
            message: "What do you wnat to add in your todos?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you what to add more?",
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(`Your todos are : ${todos}.`);
}
