class SVG {
    constructor(){
        this.charEl =''
        this.shapeEl = ''
    }

    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg>${this.shapeEl}${this.charEl}</svg>`
    }

    setShapeEl(shape){
        this.shapeEl = shape.render()
    }

    setCharEl(characters,textColor){
        this.charEl = `<text x="150" y="150" fill="${textColor}">${characters}</text>`
    }
}

module.exports = SVG;