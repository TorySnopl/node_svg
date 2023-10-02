class Shapes {
    constructor(){
        this.color = ''
    }
    colorChoice(color){
        this.color = (color);
    }
}

class Tri extends Shapes {
    render(){
        return `<polygon  points ="250,60 100, 400 400, 400" fill = "${this.color}">`
    }
}

class Sq extends Shapes {
    render(){
        return `<rect width="200" height="200" fill = "${this.color}">`
    }
}

class Cir extends Shapes{
    render(){
        return `<circle cx="50" cy="50" r="150" fill="${this.color}">`
    }
}

module.exports = {Tri, Sq, Cir}