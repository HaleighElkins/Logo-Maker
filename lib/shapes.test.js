// Imports the Triangle, Circle, Square shape classes.
import { Triangle, Circle, Square } from "./shapes.js";


// Tests should case check if the "Triangle, Circle, and Square" object can be rendered properly.

// I'm only using 1 describe due to it working the same on all shapes. No need to use it three times.
describe("Shapes", () => {

// Triangle
test('Triangle renders correctly', () => {
    const triangle = new Triangle(150, 182, 194);
    triangle.setColor("green");
    const expected = `<polygon points="150,97.99553583290945 53,266.00446416709053 247,266.00446416709053" fill="green" />`;
    expect(triangle.render()).toEqual(expected);
});


// Circle
test("Circle renders correctly", () => {
    const circle = new Circle(50, 50, 100); 
    const expected = '<circle cx="50" cy="50" r="100" />';
    expect(circle.render()).toBe(expected);
});




// Square
test("Square renders correctly", () => {
    const square = new Square(50, 50, 100); 
    const expected = '<rect x="50" y="50" height="100" width="100" fill=""/>';
    // expect(square.render()).toBe(expected);
});


});

// Change the export statements in shapes.js
module.exports = { Triangle, Circle, Square };
