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
    type: "input",
    message: "Provide the command to install the project",
    name: "installation"

},
{
    type: "list",
    message: "What license should your project have?",
    name: "license",
    choices: [
       "GNU GPLv3",
       "Mozilla Public License 2.0",
       "Apache License 2.0",
       "MIT License",
       "The Unlicense"

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

    
},
{
    type: "input",
    message: "Enter Github User Info",
    name: "username"

},
{
 type: "input",
 message: "Enter Your Email Address:",
 name: "email"


}


]

function init(){
 inquirer.prompt(questions)
 .then((answers)=> { 

  const template = util(answers);
//   sends question and answer to the generateMarkdown file.

  fs.writeFileSync(path.join(process.cwd(), 'README.md'), template);
 


 })
}
init();