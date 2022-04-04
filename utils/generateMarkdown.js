const licArray = ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause license", "BSD 3-clause license", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU General Public License v3.0",  "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC", "LaTeX Project Public License v1.3c", "Microsoft Public License",  "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === licArray[0]){
    return "[![License: AFL-3.0](https://img.shields.io/badge/License-AFL--3.0-lightgrey.svg)](https://opensource.org/licenses/AFL-3.0)"
  }
  if (license === licArray[1]){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
  }
  if (license === licArray[2]){
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
  }
  if (license === licArray[3]){
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }
  if (license === licArray[4]){
    return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  }
  if (license === licArray[5]){
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
  if (license === licArray[6]){
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
  }
  if (license === licArray[7]){
    return "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)"
  }
  if (license === licArray[8]){
    return "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)"
  }
  if (license === licArray[9]){
    return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
  }
  if (license === licArray[10]){
    return "[![License: ECL-2.0](https://img.shields.io/badge/License-ECL--2.0-lightgrey.svg)](https://opensource.org/licenses/ECL-2.0)"
  }
  if (license === licArray[11]){
    return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }
  if (license === licArray[12]){
    return "[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)"
  }
  if (license === licArray[13]){
    return "[![License: EUPL-1.1](https://img.shields.io/badge/License-EUPL--1.1-lightgrey.svg)](https://choosealicense.com/licenses/eupl-1.1/)"
  }
  if (license === licArray[14]){
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  }
  if (license === licArray[15]){
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  } 
  if (license === licArray[16]){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  if (license === licArray[17]){
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)"
  }
  if (license === licArray[18]){
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
  }
  if (license === licArray[19]){
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }
  if (license === licArray[20]){
    return "[![License: LPPL-1.3c](https://img.shields.io/badge/License-LPPL--1.3c-lightgrey.svg)](https://spdx.org/licenses/LPPL-1.3c.html)"
  }
  if (license === licArray[21]){
    return "[![License: MS-PL](https://img.shields.io/badge/License-MS--PL-lightgrey.svg)](https://opensource.org/licenses/MS-PL)"
  }
  if (license === licArray[22]){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (license === licArray[23]){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  if (license === licArray[24]){
    return "[![License: OSL-3.0](https://img.shields.io/badge/License-OSL--3.0-lightgrey.svg)](https://opensource.org/licenses/OSL-3.0)"
  }
  if (license === licArray[25]){
    return "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)"
  }
  if (license === licArray[26]){
    return "[![License: NCSA](https://img.shields.io/badge/License-NCSA-lightgrey.svg)](https://opensource.org/licenses/NCSA)"
  }
  if (license === licArray[27]){
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }
  if (license === licArray[28]){
    return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
  }
  if (license === ""){
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licArray[0]){
    return `[${licArray[0]}](https://opensource.org/licenses/AFL-3.0)`
  } else if (license === licArray[1]){
    return `[${licArray[1]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === licArray[2]){
    return `[${licArray[2]}](https://opensource.org/licenses/Artistic-2.0)`
  } else if (license === licArray[3]){
    return `[${licArray[3]}](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license === licArray[4]){
    return `[${licArray[4]}](https://opensource.org/licenses/BSD-2-Clause)`
  } else if (license === licArray[5]){
    return `[${licArray[5]}](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === licArray[6]){
    return `[${licArray[6]}](http://creativecommons.org/publicdomain/zero/1.0/)`
  } else if (license === licArray[7]){
    return `[${licArray[7]}](https://creativecommons.org/licenses/by/4.0/)`
  } else if (license === licArray[8]){
    return `[${licArray[8]}](https://creativecommons.org/licenses/by-sa/4.0/)`
  } else if (license === licArray[9]){
    return `[${licArray[9]}](http://www.wtfpl.net/about/)`
  } else if (license === licArray[10]){
    return `[${licArray[10]}](https://opensource.org/licenses/ECL-2.0)`
  } else if (license === licArray[11]){
    return `[${licArray[11]}](https://opensource.org/licenses/EPL-1.0)`
  } else if (license === licArray[12]){
    return `[${licArray[12]}](https://opensource.org/licenses/EPL-2.0)`
  } else if (license === licArray[13]){
    return `[${licArray[13]}](https://choosealicense.com/licenses/eupl-1.1/)`
  } else if (license === licArray[14]){
    return `[${licArray[14]}](https://www.gnu.org/licenses/agpl-3.0)`
  } else if (license === licArray[15]){
    return `[${licArray[15]}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  } else if (license === licArray[16]){
    return `[${licArray[16]}](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === licArray[17]){
    return `[${licArray[17]}](https://www.gnu.org/licenses/lgpl-2.1)`
  } else if (license === licArray[18]){
    return `[${licArray[18]}](https://www.gnu.org/licenses/lgpl-3.0)`
  } else if (license === licArray[19]){
    return `[${licArray[19]}](https://opensource.org/licenses/ISC)`
  } else if (license === licArray[20]){
    return `[${licArray[20]}](https://spdx.org/licenses/LPPL-1.3c.html)`
  } else if (license === licArray[21]){
    return `[${licArray[21]}](https://opensource.org/licenses/MS-PL)`
  } else if (license === licArray[22]){
    return `[${licArray[22]}](https://opensource.org/licenses/MIT)`
  } else if (license === licArray[23]){
    return `[${licArray[23]}](https://opensource.org/licenses/MPL-2.0)`
  } else if (license === licArray[24]){
    return `[${licArray[24]}](https://opensource.org/licenses/OSL-3.0)`
  } else if (license === licArray[25]){
    return `[${licArray[25]}](https://opensource.org/licenses/OFL-1.1)`
  } else if (license === licArray[26]){
    return `[${licArray[26]}](https://opensource.org/licenses/NCSA)`
  } else if (license === licArray[27]){
    return `[${licArray[27]}](http://unlicense.org/)`
  } else if (license === licArray[28]){
    return `[${licArray[28]}](https://opensource.org/licenses/Zlib)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === licArray[0]){
    return `Read more about ${licArray[0]} here:`
  } else if (license === licArray[1]){
    return `Read more about ${licArray[1]} here:`
  } else if (license === licArray[2]){
    return `Read more about ${licArray[2]} here:`
  } else if (license === licArray[3]){
    return `Read more about ${licArray[3]} here:`
  } else if (license === licArray[4]){
    return `Read more about ${licArray[4]} here:`
  } else if (license === licArray[5]){
    return `Read more about ${licArray[5]} here:`
  } else if (license === licArray[6]){
    return `Read more about ${licArray[6]} here:`
  } else if (license === licArray[7]){
    return `Read more about ${licArray[7]} here:`
  } else if (license === licArray[8]){
    return `Read more about ${licArray[8]} here:`
  } else if (license === licArray[9]){
    return `Read more about ${licArray[9]} here:`
  } else if (license === licArray[10]){
    return `Read more about ${licArray[10]} here:`
  } else if (license === licArray[11]){
    return `Read more about ${licArray[11]} here:`
  } else if (license === licArray[12]){
    return `Read more about ${licArray[12]} here:`
  } else if (license === licArray[13]){
    return `Read more about ${licArray[13]} here:`
  } else if (license === licArray[14]){
    return `Read more about ${licArray[14]} here:`
  } else if (license === licArray[15]){
    return `Read more about ${licArray[15]} here:`
  } else if (license === licArray[16]){
    return `Read more about ${licArray[16]} here:`
  } else if (license === licArray[17]){
    return `Read more about ${licArray[17]} here:`
  } else if (license === licArray[18]){
    return `Read more about ${licArray[18]} here:`
  } else if (license === licArray[19]){
    return `Read more about ${licArray[19]} here:`
  } else if (license === licArray[20]){
    return `Read more about ${licArray[20]} here:`
  } else if (license === licArray[21]){
    return `Read more about ${licArray[21]} here:`
  } else if (license === licArray[22]){
    return `Read more about ${licArray[22]} here:`
  } else if (license === licArray[23]){
    return `Read more about ${licArray[23]} here:`
  } else if (license === licArray[24]){
    return `Read more about ${licArray[24]} here:`
  } else if (license === licArray[25]){
    return `Read more about ${licArray[25]} here:`
  } else if (license === licArray[26]){
    return `Read more about ${licArray[26]} here:`
  } else if (license === licArray[27]){
    return `Read more about ${licArray[27]} here:`
  } else if (license === licArray[28]){
    return `Read more about ${licArray[28]} here:`
  } else {
    return ""
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions?](#questions)
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.desc}
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## How to Contribute
  [Contributor Covenant](https://www.contributor-covenant.org/)  
  ${data.cont}
  ## Tests
  ${data.test}
  ## Questions?
  ### Contact information: 
  [${data.github}](https://github.com/${data.github})  
  ${data.email}`;
}

module.exports = generateMarkdown;
