const inquirer = require ('inquirer');
const fs = require ('fs');
const util = require('./utils/generateMarkdown');
const path = require('path');

// const writeFileAsync = util.promisify(fs.writeFile);

const questions= [

{
    type: "input",
    message: "What is your project title?",
    name: "title"
},
{
    type: "input",
    message: "Please write a short description of your project",
    name: "description"
},
{
    type: "list",
    message: "What license should your project have?",
    name: "license",
    choices: [
        "MIT",
        "Apache 2.0",
        "GNU v3",
        "BSD 3-Clause",
        "Mozilla Public License 2.0",
        "None"

    ]
},
{
  type: "input",
  message: "What does the user need to know about using the repository?",
  name: "usage"

},
{
  type: "input",
  message: "What does the user need to know about contributing to your repository?",
  name: "contribute"

    
}


]

function init(){
 inquirer.prompt(questions)
 .then((answers)=> { 

  const template = util(answers);

  fs.writeFileSync(path.join(process.cwd(), 'README.md'), template);
 


 })
}
init();