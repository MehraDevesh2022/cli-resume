const inquirer = require('inquirer');
const cp = require('child_process');

inquirer
    .prompt([
       {
            type: 'list',
            name: 'selection',
            choices :['About' , 'skills' , 'academics' , 'Projects']
       }

    ])
    .then((answers) => {
        if (answers.selection === 'About'){
           console.log(`Full Stack Enthusiast | Passionate for Coding |
Enthusiastic in Open Source Contribution.`);
        } else if (answers.selection === 'skills'){
           console.log('Java' ,'c' ,'JavaScript' , 'React' , 'Nodejs' , 'Express.js' ,'Html' ,'Css');
        } else if (answers.selection === 'academics'){
           cp.execSync('start chrome https://photos.google.com/search/doc/photo/AF1QipN6k9Y4KkKpzMu5VLWQT3nWC8CqukvNfcgNp4Za')    
        } else if (answers.selection === 'Projects'){
           cp.execSync('start chrome https://github.com/MehraDevesh2022?tab=repositories')
       }

    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error);
        } else {
            // Something else went wrong
            console.log('other error');
        }
    });