// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {

    
    
    }



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return license;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log(data)

  return `# ${data.title},
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />,


  

## description
    ${data.description},
## Table Of Contents
* [Installation](#installation)


## Usage
    ${data.usage},
## Contribution
    ${data.contribute}
## License


  
`;
}

module.exports = generateMarkdown;
