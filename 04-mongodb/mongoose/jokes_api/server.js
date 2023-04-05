const express = require("express");
const app = express();

// Calling the mongoose.config file and running the connect function. Automatically runs the file (connects to the DB).
require("./config/mongoose.config");

// Middleware to handle POST requests.
app.use(express.json(), express.urlencoded({ extended: true }));

// Jumps into the jokes.routes file and saves the function in AllMyJokeRoutes.
const AllMyJokeRoutes = require("./routes/jokes.routes");

// Run the function and pass in the app.
AllMyJokeRoutes(app);

// Can pass in the port 8000 here or use "const port = 8000;" above.
app.listen(8000, () => console.log("The server is all fired up on port 8000"));