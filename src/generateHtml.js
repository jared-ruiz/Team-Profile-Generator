const generateHeader = (teamArray) => {
    if(!teamArray) {
        return '';
    }
    else {
        const teamCount = teamArray.length
        
        return `<p class="text-black text-center text-uppercase">Your total team member count is: ${teamCount}</p>`
    }
    
    
}

const addManagerSection = (teamArray) => {
    if(!teamArray) {
        return '';
    }
    else {
        const managerInfo = teamArray[0];

        return `<div class="card">
                        <div class="card">
                            <h5 class="card-title">Manager</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Name: ${managerInfo.name}</h6>
                            <p class="card-text">ID: ${managerInfo.id}</p>
                            <p class="card-text">Email: ${managerInfo.email}</p>
                            <p class="card-text">Office #: ${managerInfo.officeNumber}</small></p>
                        </div>
                    </div>`
    }
}

const addEngineerSection = (arr) => {
    if(!arr) {
        return '';
    }
    else {
        const engineerHtml = [];
        arr.forEach((engineer) => {
            console.log(engineer);
            console.log(engineer.name);
                var engineerEl = `
                    <div class="card">
                        <h5 class="card-title">Engineer</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Name: ${engineer.name}</h6>
                        <p class="card-text">ID: ${engineer.id}</p>
                        <p class="card-text">Email: ${engineer.email}</p>
                        <p class="card-text">GitHub: ${engineer.github}</small></p>
                    </div>`
            engineerHtml.push(engineerEl);
        })
        return engineerHtml.join('');
    }
        
}

const addInternSection = (arr) => {
    if(!arr) {
        return '';
    }
    else {
        const internHtml = [];
        arr.forEach((intern) => {
            console.log(intern);
            console.log(intern.name);
                var internEl = `
                    <div class="card">
                            <h5 class="card-title">Intern</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Name: ${intern.name}</h6>
                            <p class="card-text">ID: ${intern.id}</p>
                            <p class="card-text">Email: ${intern.email}</p>
                            <p class="card-text">School: ${intern.github}</small></p>
                    </div>`
            internHtml.push(internEl);
        })
        return internHtml.join('');
    }
        
}

const generateHtml = (teamArray) => {
    console.log(teamArray);
    const managerArray = teamArray.filter(member => member.getRole() === 'Manager');
    const engineerArray = teamArray.filter(member => member.getRole() === 'Engineer');
    const internArray = teamArray.filter(member => member.getRole() === 'Intern');
    console.log(managerArray);
    console.log(engineerArray);
    console.log(internArray);
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="">
        <title>Team Generator</title>
    </head>

    <body>
        <header>
            <div class="hero">
                <h1 class ="p-5 test-uppercase m-0 text-center text-black">Team Generator</h1>
                ${generateHeader(teamArray)}
            </div>
        </header>
    <main class="m-5">
        <div class="row">
            <div class="col-sm-4">
                <div class="card-deck">
                    ${addManagerSection(managerArray)}
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card-deck">
                    ${addEngineerSection(engineerArray)}
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card-deck">
                    ${addInternSection(internArray)}
                </div>
            </div>
        </div>

    </main>
        <footer>
  
        </footer>
    </body>
    </html>

    `
}

module.exports = generateHtml;