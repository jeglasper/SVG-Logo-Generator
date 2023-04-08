class Shape {
    constructor() {
        this.text = "";
    }
}

class Triangle extends Shape {
    setColor(shapeColor) {
        this.text = `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />`
    }

    render () {
        return this.text;
    }
}

class Circle extends Shape {
    setColor(shapeColor) {
        this.text = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`
    }
    render () {
        return this.text;
    }
}

class Square extends Shape {
    setColor(shapeColor) {
        this.text = `<rect x="50" width="200" height="200" fill="${shapeColor}" />`
    }
    render () {
        return this.text;
    }
}

module.exports = {
    Circle,
    Triangle,
    Square
}