const program = require('commander');
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const 
{
    addCustomer, 
    findCustomer, 
    updateCustomer, 
    deleteCustomer,
    listCustomers
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




program
    .command('delete <_id>')
    .alias('d')
    .description('Delete customer')
    .action((_id) => deleteCustomer(_id))


program
    .command('update <_id>')
    .alias('u')
    .description('Update a customer')
    .action(_id => {
      prompt(questions).then(answers => updateCustomer(_id, answers));
    });
    

program
    .command('list')
    .alias('l')
    .description('List all customers')
    .action(() => listCustomers())




program.parse(process.argv);