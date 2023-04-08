const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        message: 'INITIALS: What are your initials?',
        name: 'text',
    }, {
        type: 'input',
        message: 'TEXT COLOR: What color would you like your initials to be (color keyword or hexadecimal number)?',
        name: 'textColor',
    }, {
        type: 'list',
        message: 'SHAPE: What shape would you like for your logo to use?',
        choices: ['circle', 'triangle', 'square'],
        name: 'shape',
    }, {
        type: 'input',
        message: 'SHAPE COLOR: What color would you like the shape to be (color keyword or hexadecimal number)?',
        name:'shapeColor',
    }
];

function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data)
    })
}

init();