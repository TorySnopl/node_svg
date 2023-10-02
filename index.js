const inq = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const fs = require('fs');
const shapes = require('./utilities/shapes.js');

const SVG = require('./utilities/svg.js');

inq.registerPrompt('maxLength', MaxLengthInputPrompt);

inq
    .prompt ([
        {
            type: 'maxLength',
            name: 'characters',
            message: 'Please enter up to three characters:',
            maxLength: 3
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like your text to be?:'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please select a shape:',
            choices: ["Circle","Triangle","Square"]
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like your shape to be?:'
        },
    
    ])
    .then ((response) => {
        let characters = response.characters;
        let textColor = response.textColor;
        let shape = response.shape;
        let shapeColor = response.shapeColor;

      switch (shape){
        case 'Circle':
            shape = new shapes.Cir();
            break;
        case 'Triangle':
            shape = new shapes.Tri();
            break;
        case 'Square':
            shape = new shapes.Sq();
            break;
      }  
      shape.colorChoice(shapeColor);
      
      let svg = new SVG();
      svg.setShapeEl(shape);
      svg.setCharEl(characters,textColor);
      let svgLogo = svg.render();

      

      fs.writeFile("./logos/logo.svg",svgLogo,function(err){
        if(err)throw err;
        else{ console.log("generating logo.svg")}
     });

        

        


    })
    .catch ((error)=>{
        console.error(error)
    })

