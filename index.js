const inq = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const fs = require('fs');
const shapes = require('./utilities/shapes.js');

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

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

        svg.setAttribute('width', '300px');
        svg.setAttribute('height', '200px');

        


    })
    .catch ((error)=>{
        console.error(error)
    })

