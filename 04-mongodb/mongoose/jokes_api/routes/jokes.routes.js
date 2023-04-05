const JokeController = require('../controllers/jokes.controller');

// One parameter (app). Rather than putting (req, res), instead call upon the function from the controller.js file, i.e. JokeController.findAllJokes.
module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.get('/api/jokes/:id', JokeController.findOneSingleJoke);
    app.put('/api/jokes/:id', JokeController.updateExistingJoke);
    app.delete('/api/jokes/:id', JokeController.deleteAnExistingJoke);
}