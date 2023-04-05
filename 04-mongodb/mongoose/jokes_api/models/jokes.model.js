// Import mongoose package. Whenever you're interacting with mongoose directly, this is required.
const mongoose = require('mongoose');

// Set up the different fields in an object for the schema.
// Schema is the blueprint and you don't interact with it.
const JokeSchema = new mongoose.Schema({
    question: {type: String},
    answer: {type: String},
    hint: {type: String}
});

// Create a model that you interact (CRUD) with; it's connected to the schema (from above) and uses it as a blueprint.
const Joke = mongoose.model('Joke', JokeSchema);

// Allow them model to be exported so it can be used in other files, i.e. controllers.
module.exports = Joke;