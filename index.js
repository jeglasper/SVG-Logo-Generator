const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./lib/shapes');

function svgFileContent ({text,textColor,shape, shapeColor}, shapeContent) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shapeContent}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  
  </svg>`;
}

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

function init() {
    //Inquirer function to collect data to create a generate a logo
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data);
        
        var shapeContent = "";
        
        if(data.shape === "circle") {
            const logoCircle = new Circle();
            logoCircle.setColor(data.shapeColor);
            shapeContent = logoCircle.render();
        } else if (data.shape === "triangle") {
            const logoTri = new Triangle();
            logoTri.setColor(data.shapeColor);
            shapeContent = logoTri.render();
        } else if (data.shape === "square") {
            const logoSqu = new Square();
            logoSqu.setColor(data.shapeColor);
            shapeContent = logoSqu.render();
        };

        const fileName = `./examples/logo.svg`
        
        fs.writeFile(fileName, svgFileContent(data, shapeContent), (err) => 
        err ? console.log(err) : console.log('Generated logo.svg'))

    })
}

init();