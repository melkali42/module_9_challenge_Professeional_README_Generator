const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

//Create an array of questions for user input for README 
const questions = [
    {
        type: "input",
        name: "Title",
        message: "Enter the title of your project",
    },
    {
        type: "input",
        name: "description",
        message: "Enter the description of your project",
    },
    {
        type: "input",
        name: "table of contents (optional)",
        message: "Enter the table of contents (optional)",
    },
    {
        type: "input",
        name: "installation",
        message: "Enter the installation instructions",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter the usage information",
    },
    {
        type: "input",
        name: "credits",
        message: "Enter the credits for collaborators:",
    },
    {
        type: "input",
        name: "license",
        message: "Enter the license for your application:",
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0'],
    },
    {
        type: "input",
        name: "badges",
        message: "Enter any badges you have",
    },
    {
        type: "input",
        name: "features",
        message: "Enter any features your project has",
    },
    {
        type: "input",
        name: "contributions",
        message: "Enter the contribution guidelines",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter the test instructions:",
    },
];

