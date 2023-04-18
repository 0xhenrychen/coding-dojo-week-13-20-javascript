const authorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/api/all', authorController.findAllAuthors);
    app.post('/api/new', authorController.createAuthor);
    app.get('/api/one/:id', authorController.findOneAuthor);
    app.put('/api/edit/:id', authorController.updateAuthor);
    app.delete('/api/delete/:id', authorController.deleteAuthor);
}