const mongoose = require('mongoose');
const Customer = require('./models/Customer');
mongoose.Promise = global.Promise;
const colors = require('colors');

const addCustomer = async (customer) => {
    await Customer.create(customer)
        .then(customer => {
            console.info('New Customer Added');
            mongoose.connection.close();
        });
};

const findCustomer = async (name) => {
    const search = await new RegExp(name, 'i');
    await Customer.find({ $or: [{ firstName: search }, { lastName: search }] })
        .then(customers => {
            console.info(customers);
            console.info(`${customers.length} matches`);
            mongoose.connection.close();
        });
};

module.exports = {
    addCustomer,
    findCustomer
};

const db = mongoose.connect('mongodb://127.0.0.1:27017/myCLI', {
    useNewUrlParser: true,
    // Other parameters or options you may require
})
    .then(() => {
        console.log("Connected to MongoDB".cyan.underline.bold);
    })
    .catch((error) => {
        console.log("Unable to connect to MongoDB!".red.bold.underline, error);
    });
