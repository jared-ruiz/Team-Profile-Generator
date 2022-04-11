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
        if (managerInfo.confirmTeamMembers) {
            //create manager object
            const manager = new Manager(managerInfo.managerName, managerInfo.managerId, managerInfo.managerEmail, managerInfo.officeNumber, managerInfo.confirmTeamMembers);

            //push manager object to array
            teamArray.push(manager);

            console.log(teamArray);

            //run addTeam function
            addTeam();
        }
        else {
            //create manager object
            const manager = new Manager(managerInfo.managerName, managerInfo.managerId, managerInfo.managerEmail, managerInfo.officeNumber, managerInfo.confirmTeamMembers);

            //push manager object to array
            teamArray.push(manager);

            console.log(teamArray);
            
            //return manager info
            return managerInfo;
        }
    })
}  

const addTeam = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeChoice',
            message: 'Please select what type of team member you would like to add.',
            choices: ['Engineer', 'Intern', 'Employee']
        }
    ])
    .then(addTeamInfo => {
        if (addTeam.employeeChoice === 'Engineer') {
            addEngineer();
        }
        else if (addTeam.employeeChoice === 'Intern') {
            addIntern();
        }
        else {
            addEmployee();
        }
    })
}

const addEngineer = () => {
    console.log(teamArray);
    console.log('You chose Engineer!');
}

const addIntern = () => {
    console.log(teamArray);
    console.log('You choise Intern!');
}

const addEmployee = () => {
    console.log(teamArray);
    console.log('You chose Employee!');
}

//initialize 
managerPrompt()