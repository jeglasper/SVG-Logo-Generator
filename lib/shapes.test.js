const {Circle,Square,Triangle} = require('./shapes');

describe('Circle', () => {
    it('render a green circle', () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
    });
});

describe('Square', () => {
    it('render a red square', () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual('<rect x="50" width="200" height="200" fill="red" />');
    });
});

describe('Triangle', () => {
    it('render a blue triangle', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});
