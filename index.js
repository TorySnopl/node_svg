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
            name: 'color',
            message: 'please enter a color keyword:'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please select a shape:',
            choices: ["Circle","Triangle","Square"]
        }
    
    ])
    .then ((response) => {
        let characters = response.characters;
        let color = response.color;
        let shape = response.shape;
    })
    .catch ((error)=>{
        console.error(error)
    })

