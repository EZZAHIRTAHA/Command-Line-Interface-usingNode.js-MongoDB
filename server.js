const mongoose = require('mongoose');
const Customer = require('./models/Customer');
mongoose.Promise = global.Promise;
const colors = require('colors');

const addCustomer = async (customer) => {
    await Customer.create(customer)
        .then(customer => {
            console.info(`New Customer ${customer.firstName.cyan.underline.bold} Added`);
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


const updateCustomer = async (_id, customer) => {
    // const customerId = customer._id;
    // const { firstName, lastName, email, phone } = customer;
    await Customer.updateOne(
      { _id},
      customer
    )
      .then(() => {
        console.info("Customer updated successfully");
        // Additional code if needed
        mongoose.connection.close();
      })
      .catch((error) => {
        console.error("Error updating customer:", error);
      });
  };

const deleteCustomer = async (_id) => {
    await Customer.deleteOne({_id: _id})
    .then(() => {
        console.info("User deleted successfully");
        mongoose.connection.close();
    })
    .catch(error => console.info(error));
};

const listCustomers = async() => {
    try{
    const customers = await Customer.find()
        console.info("All Customers")
        console.info(customers);
        mongoose.connection.close();
}    catch{
        (error => console.info(error))
}
}
  


module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    deleteCustomer,
    listCustomers
};

mongoose.connect('mongodb://127.0.0.1:27017/myCLI', {
    useNewUrlParser: true,
    // Other parameters or options you may require
})
    .then(() => {
        console.log(`Connecting to: mongodb://${mongoose.connection.host}/${mongoose.connection.port}/myCLI`
        .cyan.underline.bold);
    })
    .catch((error) => {
        console.log("Unable to connect to MongoDB!".red.bold.underline, error);
    });
