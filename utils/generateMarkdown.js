// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseList = [
    {
        name: 'GNU GPLv3',
        badge: "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)",
        link: "https://opensource.org/licenses/"
      },
      {
        name: 'Mozilla Public License 2.0',
        badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
        link: "https://opensource.org/licenses/MPL-2.0)"
      },
      {
        name: 'Apache License 2.0',
        badge: "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        link: "https://opensource.org/licenses/Apache-2.0)",
      },
      {
        name: 'MIT License',
        badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        link: 'https://opensource.org/licenses/MIT',
      },
      {
    
        name: 'The Unlicense',
        badge: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
        link: "https://opensource.org/licenses/unlicense"
      }
    ];








function renderLicenseBadge(license) {
    const selectedLicense = licenseList.filter(item=> item.name===license);
    return selectedLicense[0].badge;

    
    
    }



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
const selectedLicense = licenseList.filter(item=> item.name===license);
return selectedLicense[0].link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license){
    return `${license}
    `;
   } else return ""
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log(data)

    return `# ${data.title},

${renderLicenseBadge(data.license)}
    
## description
${data.description}
## Table Of Contents
* [Installation](#installation)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [License](#License)
* [Questions](#questions)

## Installation

To install necessary dependencies,
run the following command line:
\`\`\`
${data.installation}
\`\`\`


## Usage
${data.license}
${renderLicenseLink(data.license)}
     
## Contribution
    ${data.contribute}
## License
${renderLicenseSection(data.license)}

## Questions

if you have any questions about the repo, open an issue or contact me directly at ${
  data.email
}. You can find more of my work at [${data.username}](https://github.com/${
  data.username
}/).

   


  
`;
}

module.exports = generateMarkdown;
