// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseList = [
    {
        name: 'GNU GPLv3',
        badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        link: "https://www.gnu.org/licenses/gpl-3.0"
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
        name: 'Boost Software License 1.0',
        badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
        link: "https://opensource.org/licenses/BSL-1.0"
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
    ${data.description},
## Table Of Contents
* [Installation](#installation)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [License](#License)
* [Questions](#questions)

## Installation
   ${data.installation},


## Usage
    ${data.usage},
## Contribution
    ${data.contribute},
## License
    ${data.license},

   


  
`;
}

module.exports = generateMarkdown;
