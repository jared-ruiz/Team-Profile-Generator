const Employee = require('./lib/Employee');
const inquirer = require ('inquirer');
// const fs = require('fs');

teamArray = [];

const standardQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please input your work ID.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please input your current work email.'
    }
]

function TeamGen() {
    inquirer.prompt(standardQuestions).then((answers) => {
        const employee = new Employee(answers.name, answers.id, answers.email);
        console.log(employee);
        console.log(employee.getName());
        console.log(employee.getId());
        console.log(employee.getEmail());
        console.log(employee.getRole());
    })
}

TeamGen();