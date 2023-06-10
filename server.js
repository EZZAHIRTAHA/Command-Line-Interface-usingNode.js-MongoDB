const mongoose = require('mongoose');


// Map global Promise - get rid of warnings
mongoose.Promise = global.Promise;

// Connect to MongoDB 
const db = mongoose.connect('mongodb://127.0.0.1:27017/myCLI', {
  useNewUrlParser: true,         // Use the new URL parser
  useUnifiedTopology: true,      // Use the new server discovery and monitoring engine
  useCreateIndex: true,          // Ensure indexes are created for schema-defined indexes
  useFindAndModify: false,       // Disable deprecated findAndModify()
  // Other parameters or options you may require
});






