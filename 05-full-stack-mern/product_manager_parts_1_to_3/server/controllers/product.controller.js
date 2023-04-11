const Product = require('../models/product.model');    /* this is new */

module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({     // This is where we're setting the API's response to the requesting client
        message: "Hello World"
    });
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json({ item: allProducts })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

    /* The method below is new */
module.exports.createProduct = (request, response) => {
    // Mongoose's "create" method is run using our Product model to add a new product to our db's product collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Product.create(request.body) //This will use whatever the body of the client's request sends over
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
    .then((product) => response.json(product))
    .catch(err => response.json(err));
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id }) //note: "id" here MUST match id in corresponding route
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

