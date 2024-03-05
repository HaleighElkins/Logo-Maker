// Triangle
export class Triangle {
    constructor(x, y, side) {
        this.x = x;
        this.y = y;
        this.side = side;
        this.color = ''
    }

    setColor(color) {
        this.color = color;
    }

    render() { 
        const height = (Math.sqrt(3) / 2) * this.side;
        const points = `${this.x},${this.y - height / 2} ${this.x - this.side / 2},${this.y + height / 2} ${this.x + this.side / 2},${this.y + height / 2}`;
        const fill = this.color ? `fill="${this.color}"` : '';
        return `<polygon points="${points}" ${fill} />`
    }
}

// Next is to use the 'setColor' method to set the color. The render method should generate the polygon element. 

const shape = new Triangle(150, 182, 194);
shape.setColor("green");
expect(shape.render()).toEqual(`<polygon points ="150,64.535 278, 182 22, 182" fill="green" />`);




// Circle

export class Circle {

}

// Square

export class Square {

}


















module.exports = {Triangle, Circle, Square}