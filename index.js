// GIVEN a command-line application that accepts user input
import inquirer from "inquirer";


const width = 500;
const height = 300;

inquirer
    .prompt([
        // WHEN I am prompted for text
        // THEN I can enter up to three characters
        {
            type:"input",
            name:"text",
            message:"Enter up to 3 characters pleas:",
        },
        // WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
        {
            type:"input",
            name:"colorText",
            message:"Please enter a color keyword (OR a hexadecimal number) for your text:"  
        },
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
        {
            type:"list",
            name:"shape",
            message:"Please chose which shape you'd like to use:",
            choices:["Triange", "Circle", "Square"],
        },
        // WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
        {
            type:"input",
            name:"colorShape",
            message:"Please enter a color keyword (OR a hexadecimal number) for your shape:"
        },
    ])

    // WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered