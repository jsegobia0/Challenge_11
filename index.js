const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

// WHEN I enter my project title
    {
        type: "input",
        name: "title",
        message: "Title of README?"
    },
// THEN this is displayed as the title of the README

// WHEN I enter a description,
    {
        type: "input",
        name: "description",
        message: "Description of application?"
    },
// installation instructions,
    {
        type: "input",
        name: "installation",
        message: "Details how on installing?"
    },
// usage information,
    {
        type: "input",
        name: "usage",
        message: "How do you use the application?"
    },
// contribution guidelines,
    {
        type: "input",
        name: "contributing",
        message: "Details on how to contribute?"
    },
// test instructions
    {
        type: "input",
        name: "tests",
        message: "How to test?"
    },
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I enter my GitHub username
{
    type: "input",
    name: "questions",
    message: "GitHub username?"
},
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
];

// function to write README file
function writeToFile(fileName, data) {
    // 
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log("Generating README...");
        writeToFile("READEME.md", generateMarkdown({...inquirerResponses}));
    })

}

// function call to initialize program
init();

// GIVEN a command-line application that accepts user input

// WHEN I am prompted for information about my application repository

// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions







// WHEN I choose a license for my application from a list of options

// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under





// WHEN I enter my email address

// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents

// THEN I am taken to the corresponding section of the README