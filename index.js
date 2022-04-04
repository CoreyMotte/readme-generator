// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
function questions(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please input the title of your project.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please input your GitHub username.'
        },
        {
            type: 'input',
            name: 'repo',
            message: 'Please input the name of your repository.'
        },
        {
            type: 'input',
            name: 'desc',
            message: 'Please input a description of your project.'
        },
        {
            type: 'input',
            name: 'info',
            message: 'Please input basic information for use of your project.'
        },
        {
            name: 'license',
            message: 'Select kind of license for this application:',
            type: 'list',
            choices: ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause license", "BSD 3-clause license", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Do What The Fuck You Want To Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU General Public License v3.0",  "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC", "LaTeX Project Public License v1.3c", "Microsoft Public License",  "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"]
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please input test functions for your project (if included).'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please input your email address.'
        },
        {
            type: 'input',
            name: 'fileName',
            message: 'Please input the name of the generated file.'
        }
    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data,
    (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
}

// TODO: Create a function to initialize app
async function init() {
    let responses = await questions();
    writeToFile((responses.fileName), (generateMarkdown(responses)));
}

// Function call to initialize app
init();
