// Const was not working for some reason so I chnaged to import instead
import fs from 'fs';
import inquirer from 'inquirer';
import { Triangle, Circle, Square } from './lib/shapes.js';


class Svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
        this.width = 300;
        this.height = 200;
    }

    render() {
        // I have svg credits in my READMe about what this is and how documentation works     
           return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }

    // This is to set the text insde the shape. Differs for each shape 
setTextElement(text, color, shape) {
    let textX, textY;

    // Text is 60px
    const textWidth = text.length * 60; 

    switch (shape.toLowerCase()) {
        case 'triangle':
            // Center text horizontally within the triangle
            textX = (480 - textWidth) / 2; 
            // Center text vertically within the triangle
            textY = 180; 
            break;
        case 'circle':
            // Center text horizontally and vertically within the circle
            textX = 210 - (textWidth / 2); 
            textY = 120; 
            break;
        case 'square':
            // Center text horizontally within the square
            textX = (580 - textWidth) / 2; 
            // Center text vertically within the square
            textY = 125; 
            break;
        default:
            throw new Error('Invalid shape specified');
    }

    // This is to fill the text inside the shape
    this.textElement = `<text x="${textX}" y="${textY}" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
}


    setShapeElement(shape) {
        // Set shape element with provided shape instance
        this.shapeElement = shape.render();
    }
}

// Prompt user for input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters please:'
        },
        {
            type: 'input',
            name: 'colorText',
            message: 'Please enter a color keyword (OR a hexadecimal number) for your text:'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please choose which shape you\'d like to use:',
            choices: ['Triangle', 'Circle', 'Square']
        },
        {
            type: 'input',
            name: 'colorShape',
            message: 'Please enter a color keyword (OR a hexadecimal number) for your shape:'
        }
    ])
    .then(async (answers) => {
        const { text, colorText, shape, colorShape } = answers;
// Shape instance is to hold the instance of the shape base on the provided input. 
        let shapeInstance;
// switch is to determine which shape to create based on what is provided.
        switch (shape.toLowerCase()) {
            // case is what shape we are working with
            case 'triangle':
                shapeInstance = new Triangle(150, 200, 300);
                break;
            case 'circle':
                shapeInstance = new Circle(120, 100, 90);
                break;
            case 'square':
                shapeInstance = new Square(100, 0, 200);
                shapeInstance.setColor(colorShape);
                break;
            default:
                console.error('Incorrect Shape Choice');
                return;
        }

        shapeInstance.setColor(colorShape);

        const textColor = colorText;

        const svg = new Svg();
        // Passing the Shape 
        svg.setTextElement(text, textColor, shape); 

        // passing shape instance as an argument
        svg.setShapeElement(shapeInstance);

        const svgRepresentation = svg.render();

        const fileName = 'logo.svg';
        writeToFile(fileName, svgRepresentation);

        console.log('Generated logo.svg');
    })
    .catch((error) => {
        console.error(error);
    });


// Function to write SVG representation to file
function writeToFile(fileName, svgRepresentation) {
    console.log('Writing Logo to ' + fileName);
    fs.writeFileSync(fileName, svgRepresentation);
    console.log('Generated ' + fileName);
}
