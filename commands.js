const program = require('commander');
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const 
{
    addCustomer, 
    findCustomer, 
    updateCustomer, 
    deleteCustomer
} = require('./server')



const questions = [  
        {
            type: 'input',
            name: 'firstName',
            message:'Customer First Name'
        },
        {
            type: 'input',
            name: 'lastName',
            message:'Customer Last Name'
        },
        {
            type: 'input',
            name: 'phone',
            message:'Customer Phone'
        },
        {
            type: 'input',
            name: "email",
        }
    ];


program
    .version('1.0.0')
    .description('Client management system CLI by Ezzahir Taha');




program
    .command('add')
    .alias('a')
    .description('')   
    .action( () => {
        prompt(questions).then(answers => addCustomer(answers))
    }) 


program
    .command('find <name>')
    .alias('f')
    .description('Find a customer')
    .action(name => findCustomer(name));






program.parse(process.argv);