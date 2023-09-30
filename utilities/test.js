
const {Tri,Sq,Cir} = require('./shapes.js');

describe('Tri', ()=>{
    it("should render correctly", ()=>{
    const tri = new Tri();
    let color = 'green';
    tri.colorChoice(color);
    expect (tri.render()).toEqual(`<polygon width="300" height = "200" points ="250,60 100, 400 400, 400" fill = ${color}>`);
    });
});

describe('Sq', ()=>{
    it("should render correctly", ()=>{
    const square = new Sq();
    let color = 'blue';
    square.colorChoice(color);
    expect (square.render()).toEqual(`<rect width="200" height="200" fill = ${color}>`);
    });
});

describe('Cir', ()=>{
    it("should render correctly", ()=>{
    const cir = new Cir();
    let color = 'red';
    cir.colorChoice(color);
    expect (cir.render()).toEqual(`<circle cx="50" cy="50" r="150" fill=${color}>`);
    });
});