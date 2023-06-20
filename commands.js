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
    .help(`
  Function                  Alias        Description
  version                   v            To check the version of the customer-cli
  client-cli add            a            To add new customers in the database
  client-cli list           l            To check all the customers in the database
  client-cli update [_ID]   u            To update details for specific customers in the database
  client-cli delete [_ID]   d            To delete customers from the database
  client-cli find [NAME]    f            To find a specific customes in the database
  `)


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