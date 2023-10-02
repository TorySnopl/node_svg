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
        return `<polygon points ="150,18 244,182 56, 182" fill = "${this.color}"/>`
    }
}

class Sq extends Shapes {
    render(){
        return `<rect x="55" y="40" width="200" height="200" fill = "${this.color}"/>`
    }
}

class Cir extends Shapes{
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

module.exports = {Tri, Sq, Cir}