
/// Create license link
function renderLicenseLink(license) {
    if (license === "Apache 2.0") {
        return "https://opensource.org/license/Apache-2.0";
    } else if (license === "GNU Affero v3") {
        return "https://opensource.org/licenses/agpl-v3";
    } else {
        return "";
    }
}

// Create function that returns to the license section of the README
function renderLicenseSection(license) {
    if (license === "Apche 2.0") {
        return "## License\n\nThis project is licensed under the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0/).";
    } else if (license === "GNU Affero v3") {
        return "## License\n\nThis project is licensed under the [GNU Affero License v3](https://opensource.org/licenses/agpl-v3).";     
    } else {
        return "";
    }
}

// Create a function to generate the markdown for the README file
function generateMarkdown(data) {
    return `# ${data.title}
    
## Description
${data.description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Credits
${data.credits}

## Features
${data.features}

## Contributions
${data.contributions}

## Tests
${data.tests}
`;
}

module.exports = generateMarkdown;
