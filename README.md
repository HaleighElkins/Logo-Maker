# Logo-Maker


## Description 
AS a freelance web developer I WANT to generate a simple logo for my projects SO THAT I don't have to pay a graphic designer


--- 

## Installation 

* NodeJs
* Jest
* Inquirer


--- 

## Acceptance Critera

* GIVEN a command-line application that accepts user input
- WHEN I am prompted for text
* THEN I can enter up to three characters
- WHEN I am prompted for the text color
* THEN I can enter a color keyword (OR a hexadecimal number)
- WHEN I am prompted for a shape
* THEN I am presented with a list of shapes to choose from: circle, triangle, and square
- WHEN I am prompted for the shape's color
* THEN I can enter a color keyword (OR a hexadecimal number)
- WHEN I have entered input for all the prompts
* THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
- WHEN I open the `logo.svg` file in a browser
* THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Credits

babelrc help: 
https://stackoverflow.com/questions/35391279/where-is-the-location-of-babelrc-file 

https://stackoverflow.com/questions/60288375/when-to-use-babel-config-js-and-babelrc

https://stackoverflow.com/questions/56463846/should-i-configure-babel-through-babelrc-or-webpack

https://babeljs.io/docs/configuration

https://www.npmjs.com/package/babelrc


more flexiable syntax for my shapes:
https://jestjs.io/docs/expect

https://stackoverflow.com/questions/50807170/jest-test-fails-when-trying-to-test-an-asynchronous-function-throws


For the scaling of the shapes: 
https://www.w3.org/TR/SVG/


Stack OverFlow Node Questions: 

https://stackoverflow.com/questions/61126142/import-inquirer-as-module-in-node-13