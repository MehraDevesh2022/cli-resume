const inquirer = require('inquirer');


inquirer
    .prompt([
        {
            type: 'list',
            name : 'selection',
            choices : ['choice1' , 'choice2']
        }

    ])
    .then(function (ans) {
        if (ans.selection == 'choice1') {
            console.log('Choice 1 selected')
        }
        else {
            console.log('Choice 2 selected')
        }
    })
    