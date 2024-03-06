// Triangle
export class Triangle {
    constructor(x, y, side) {
        // Assigns the value of x
        this.x = x;
        // Assigns the value of y
        this.y = y;
        // Assigns the value of side
        this.side = side;
        // Assigns the value of the color
        this.color = ''
    }
    // All above this somewhat the same for each shape, just slightly diff values. 

    setColor(color) {
        this.color = color;
    }

    render() {
        // This "Math" should calculate to a equilateral triangle
        const height = (Math.sqrt(3) / 2) * this.side;
        //This is a string to the coordinate of the 3 points of the triangle.
        const points = `${this.x},${this.y - height / 2} ${this.x - this.side / 2},${this.y + height / 2} ${this.x + this.side / 2},${this.y + height / 2}`;
        // This is a string to fill the atribute for the polygon 
        const fill = this.color ? `fill="${this.color}"` : '';
        // This return is specifically to construct an SVG polygon element. The result should be a string rep the SVG code for the equilatrial triangle. 
        return `<polygon points="${points}" ${fill} />`
    }
}

// Circle
export class Circle {
    constructor(cx, cy, r) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.color = "";
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        const fill = this.color ? `fill="${this.color}"` : '';
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" ${fill}/>`;
    }
}


// Square
export class Square {
    constructor(x, y, side) {
        this.x = x;
        this.y = y;
        this.side = side;
    }

    setColor(color) {
        this.color = color; 
    }

    render() {
        return `<rect x="${this.x}" y="${this.y}" height="${this.side}" width="${this.side}" fill=""/>`;
    }
}


module.exports = { Triangle, Circle, Square }