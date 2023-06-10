const program = require('commander');

const {addCustomer, findCustomer} = require('./server')

program
    .version('1.0.0')
    .description('Client management system CLI by Ezzahir Taha');



program
    .command('add <firstName> <lastName> <phone> <email>')
    //This sets an alias for the "add" command. Instead of typing the full command, users can use the alias "a" to invoke the "add" command.
    .alias('a')
    .description("Add customer")
    .action((firstName, lastName, phone, email ) => {
        addCustomer({firstName, lastName, phone, email});
    });

program
    .command('find <name>')
    .alias('f')
    .description('Find a customer')
    .action(name => findCustomer(name));


program.parse(process.argv);