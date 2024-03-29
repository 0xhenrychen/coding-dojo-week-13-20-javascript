// Importing the mongoose package.
const mongoose = require('mongoose');
 
// Run the mongoose.connect method and connect to the database (only need to change the db name).
mongoose.connect('mongodb://127.0.0.1:27017/jokesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));