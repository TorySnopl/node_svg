
const { describe } = require('node:test');
const {Tri,Sq,Cir} = require('./shapes.js');
const SVG = require('./svg.js');

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

describe('SVG Class', ()=>{
    it("should render correctly with shape and character", () => {
        const svg = new SVG();
        const tri = new Tri();

        svg.setShapeEl(tri);

        const char = 'ABC'
        const txtClr = 'red';

        svg.setCharEl(char,txtClr);

        const renderSVG = svg.render();

        expect(renderSVG).toContain('<polygon points');
        expect(renderSVG).toContain('<text x="150" y="125" font-size="40"');
        expect(renderSVG).toContain(`fill="${txtClr}"`);
    })
})