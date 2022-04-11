const Employee = require('./lib/Employee');
const inquirer = require ('inquirer');
const Manager = require('./lib/Manager');
// const fs = require('fs');

//ill push every obj created here
const teamArray = [];

//asks questions about manager
const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your managers name?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Please input your work ID.'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Please input your current work email.'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please input your office number.'
        },
        {
            type: 'confirm',
            name: 'confirmTeamMembers',
            message: 'Would you like to add team members?',
            default: true
        }
    ])
    // check if the manager wants to add team members, if so run next function
    .then((managerInfo) => {
        //push manager object to array first then check for more employees
        teamArray.push(managerInfo);
        if (managerInfo.confirmTeamMembers) {
            addTeam();
        }
        else {
            return managerInfo;
        }
    })
}   

managerPrompt()

    .then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber, answers.confirmTeamMembers);
        console.log(manager);
        console.log(teamArray)
    })


