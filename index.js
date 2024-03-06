// GIVEN a command-line application that accepts user input

// I tried to use const but I kept getting an error so I switched over to import
import fs from 'fs';
import inquirer from 'inquirer';
import { Triangle, Circle, Square } from './shapes.js';

// Constants for width and height
const width = 500;
const height = 300;

inquirer
    .prompt([
        // WHEN I am prompted for text
        // THEN I can enter up to three characters
        {
            type: "input",
            name: "text",
            message: "Enter up to 3 characters please:",
        },
        // WHEN I am prompted for the text color
        // THEN I can enter a color keyword (OR a hexadecimal number)
        {
            type: "input",
            name: "colorText",
            message: "Please enter a color keyword (OR a hexadecimal number) for your text:"
        },
        // WHEN I am prompted for a shape
        // THEN I am presented with a list of shapes to choose from: circle, triangle, and square
        {
            type: "list",
            name: "shape",
            message: "Please chose which shape you'd like to use:",
            choices: ["Triange", "Circle", "Square"],
        },
        // WHEN I am prompted for the shape's color
        // THEN I can enter a color keyword (OR a hexadecimal number)
        {
            type: "input",
            name: "colorShape",
            message: "Please enter a color keyword (OR a hexadecimal number) for your shape:"
        },
    ])

    .then(async (answers) => {

        // Pulling the answers  
        const { text, colorText, shape, colorShape } = answers;

        // Next should create a shape instance based on the users choice 
        let shapeInstance;
        // Explain
        switch (shape.toLowerCase()) {
            // Explain
            case "triangle":
                // Explain
                shapeInstance = new Triangle()
                // Explain
                break;
            case "circle":
                shapeInstance = new Circle()
                break;
            case "square":
                shapeInstance = new Square()
                break;
                // Explain
                default:
                console.error("Incorrect Shape Choice");
                return;
        }

        // Next is to set colors for text and the shape
        shapeInstance.setColor(colorShape);

    // Next is to render the shape
    // Explain
    const svgRepesentation = shapeInstance.render(colorShape);
        console.log(svgRepesentation);
    })

    .catch((error) => {
    console.error(error);
})



// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered