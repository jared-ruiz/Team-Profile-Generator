const Employee = require('./lib/Employee');
const inquirer = require ('inquirer');
const Manager = require('./lib/Manager');
// const fs = require('fs');

//ill push every obj created here
teamArray = [];

//asks questions about manager
const managerPrompt = () => {
    return inquirer.prompt([
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
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please input your office number.'
        }
    ])
}   

managerPrompt()

    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        console.log(manager);
        console.log(manager.getId());
    })
    
    //prompt for the managers input first

    // inquirer.prompt(standardQuestions).then((answers) => {
    //     const employee = new Employee(answers.name, answers.id, answers.email);
    //     console.log(employee);
    // })


