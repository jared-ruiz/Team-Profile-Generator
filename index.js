const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const Employee = require('./lib/Employee');

const generateHtml = require('./src/generateHtml');

const inquirer = require ('inquirer');
const fs = require('fs');
const { resolve } = require('path');

//team array that will be used to populate html later
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
            return createHtml(teamArray);
        }
    })
}  

//delete employee later
const addTeam = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeChoice',
            message: 'Please select what type of team member you would like to add.',
            choices: ['Engineer', 'Intern']
        }
    ])
    .then(addTeamInfo => {
        if (addTeamInfo.employeeChoice === 'Engineer') {
            addEngineer();
        }
        else {
            addIntern();
        }
    })
}

const addEngineer = () => {
    // console.log(teamArray);
    // console.log('You chose Engineer!');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Please input the name of the Engineer you wish to add.'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Please input the ID of the Engineer you wish to add.'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Please input the email of the Engineer you wish to add.'
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is your engineers GitHub username?"
        },
        {
            type: 'confirm',
            name: 'confirmTeamMembers',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then((engineerInfo) => {
        if(engineerInfo.confirmTeamMembers) {
            //create Engineer object
            var engineer = new Engineer(engineerInfo.engineerName, engineerInfo.engineerId, engineerInfo.engineerEmail, engineerInfo.engineerGithub);

            //push object to teamArray
            teamArray.push(engineer);

            console.log(teamArray);

            //call addTeam() function
            addTeam();
        }
        else {
            //create Engineer object
            const engineer = new Engineer(engineerInfo.engineerName, engineerInfo.engineerId, engineerInfo.engineerEmail, engineerInfo.engineerGithub);

            //push object to teamArray
            teamArray.push(engineer);

            console.log(teamArray);

            //return engineerInfo
            return createHtml(teamArray);
        }
    })
}

const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is your intern's name?"
        },
        {
            type: 'input',
            name: 'internId',
            message: "Please input the ID of the Intern you wish to add."
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the email of the Intern you wish to add?'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the school your intern is attending?'
        },
        {
            type: 'confirm',
            name: 'confirmTeamMembers',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then((internInfo) => {
        if(internInfo.confirmTeamMembers) {
            //create Intern object
            const intern = new Intern(internInfo.internName, internInfo.internId, internInfo.internEmail, internInfo.internSchool);
        
            //push object into teamArray
            teamArray.push(intern);

            //call addTeam() function
            addTeam();
        }
        else {
            //create Intern Object
            const intern = new Intern(internInfo.internName, internInfo.internId, internInfo.internEmail, internInfo.internSchool);
        
            //push object into teamArray
            teamArray.push(intern);

            console.log(teamArray);

            //return internInfo
            return createHtml(teamArray);
        }
    })
}

//create html
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            else {
                resolve({
                    ok: true,
                    message: 'File Created!'
                })
                console.log('HTML file created successfully!');
            }
        })
    })
}

//pass file to writeFile function
const createHtml = (teamArray) => {
    const template = generateHtml(teamArray);

    writeToFile('./dist/index.html', template);
}

//initialize 
managerPrompt()