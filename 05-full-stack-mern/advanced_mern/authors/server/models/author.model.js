const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema(
    {
        authorName: {
            type: String,
            required: [true, 'Author name is required.'],
            minLength: [3, 'Author name must be 3 or more characters.']
            }
    },
    {timestamps: true}
);

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;