const fs = require('fs');
const inquirer = require('inquirer');

//Variable - Questions to Collect Information to Generate Logo through Inquirer
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

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateLogo(data), (err) =>
    err ? console.error(err) : console.log('Success!')
    )
}

function init() {
    //Inquirer function to collect data to create a generate a logo
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data)
        const fileName = `${data.text}_SVGLogo(${data.textColor})(${data.shapeColor}).svg`
        console.log(fileName);
    })
}

init();