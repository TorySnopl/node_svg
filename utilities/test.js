
const {Tri,Sq,Cir} = require('./shapes.js');

describe('Tri', ()=>{
    it("should render correctly", ()=>{
    const tri = new Tri();
    let color = 'green';
    tri.colorChoice(color);
    expect (tri.render()).toEqual(`<polygon points ="150,18 244,182 56, 182" fill = "${color}"/>`);
    });
});

describe('Sq', ()=>{
    it("should render correctly", ()=>{
    const square = new Sq();
    let color = 'blue';
    square.colorChoice(color);
    expect (square.render()).toEqual(`<rect x="55" y="40" width="200" height="200" fill = "${color}"/>`);
    });
});

describe('Cir', ()=>{
    it("should render correctly", ()=>{
    const cir = new Cir();
    let color = 'red';
    cir.colorChoice(color);
    expect (cir.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}"/>`);
    });
});