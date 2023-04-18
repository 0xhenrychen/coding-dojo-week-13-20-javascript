const Author = require('../models/author.model')

// ! One way to code the CRUD methods (from Caden and Brendan):
module.exports = {
    findAllAuthors: (req, res) => {
        Author.find()
        .then((allAuthors) => {
            res.status(200).json(allAuthors)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    },

    createAuthor: (req, res) => {
        Author.create(req.body)
        .then((newAuthor) => {
            res.status(200).json(newAuthor)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    },

    findOneAuthor: (req, res) => {
        console.log(req.params);
        Author.findOne({_id: req.params.id})
            .then((oneAuthor) => {
                res.status(200).json(oneAuthor)
            })
            .catch((err) => {
                res.status(400).json(err)
            });
    },

    updateAuthor: (req, res) => {
       Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then((updatedAuthor) => {
                res.json({author: updatedAuthor})
            })
            .catch((err) => {
                res.status(400).json(err)
            });
    },

    deleteAuthor: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then((result) => {
                res.status(200).json(result)
            })
            .catch((err) => {
                res.status(400).json(err)
            });
    }

}
// ! Another way to code the CRUD methods (from the Learn platform):
// module.exports.findAllShows = (req, res) => {
//     Show.find()
//         .then((allShows) => {
//             res.json({shows: allShows})
//         })
//         .catch((err) => {
//             res.json({message: 'Something went wrong', error: err})
//         });
// }

// module.exports.createShow = (req, res) => {
//     Show.create(req.body)
//         .then((newShow) => {
//             res.json({show: newShow})
//         })
//         .catch((err) => {
//             res.status(400).json(err)
//             // res.json({message: 'Something went wrong', error: err})
//         });
// }

// module.exports.findOneShow = (req, res) => {
//     console.log(req.params);
//     Show.findOne({_id: req.params.id})
//         .then((oneShow) => {
//             res.json({show: oneShow})
//         })
//         .catch((err) => {
//             res.json({message: 'Something went wrong', error: err})
//         });
// }

// module.exports.updateShow = (req, res) => {
//     Show.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
//         .then((updatedShow) => {
//             res.json({show: updatedShow})
//         })
//         .catch((err) => {
//             res.status(400).json(err)
//             // res.json({message: 'Something went wrong', error: err})
//         });
// }

// module.exports.deleteShow = (req, res) => {
//     Show.deleteOne({_id: req.params.id})
//         .then((result) => {
//             res.json({result: result})
//         })
//         .catch((err) => {
//             res.json({message: 'Something went wrong', error: err})
//         });
// }