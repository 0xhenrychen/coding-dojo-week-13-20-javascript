const express = require("express");
const app = express();
const port = 8000;
const {faker} = require('@faker-js/faker');

// make sure these lines are above any app.get or app.post code blocks
// Don't need the following for this assignment (POST request).
// app.use( express.json() );
// app.use( express.urlencoded({ extended: true }) );

// we can hard code some users like this
// later on we will want to store users in a database
// Don't need the following for this assignment (user data).
// const users = [
//   { firstName: "Reimu",  lastName: "Hakurei"    },
//   { firstName: "Marisa", lastName: "Kirisame"   },
//   { firstName: "Sanae",  lastName: "Kochiya"    },
//   { firstName: "Sakuya", lastName: "Izayoi"     },
//   { firstName: "Momiji", lastName: "Inubashiri" }
// ];

// console.log(faker.name.firstName());

const createUser = () => {
  return {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    _id: faker.random.numeric()
  }
}

const createCompany = () => {
  return {
    _id: faker.random.numeric(),
    name: faker.company.name(),
    street: faker.address.street(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country()
  }
}

// req is short for request
// res is short for response
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello There" });
// });

// app.get("/api/users", (req, res) => {
//   res.json( users );
//   });

app.get("/api/users/new", (req, res) => {
  const newUser = createUser();
  res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
  const newCompany = createCompany();
  res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
  const newUser = createUser();
  const newCompany = createCompany();
  res.json(newUser);
  res.json(newCompany);
});

// request.body will contain the form data from Postman or from react.
// We always need to respond with something.
  app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json( { status: "ok" } );
    });

// ! GETTING DATA FROM A URL  
// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon
app.get("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    console.log(req.params.id);
    // assuming this id is the index of the users array we could return one user this way
    res.json( users[req.params.id] );
  });

// ! UPDATING DATA
app.put("/api/users/:id", (req, res) => {
  // we can get this `id` variable from req.params
  const id = req.params.id;
  // assuming this id is the index of the users array we can replace the user like so
  users[id] = req.body;
  // we always need to respond with something
  res.json( { status: "ok" } );
});

// ! DELETING DATA
app.delete("/api/users/:id", (req, res) => {
  // we can get this `id` variable from req.params
  const id = req.params.id;
  // assuming this id is the index of the users array we can remove the user like so
  users.splice(id, 1);
  // we always need to respond with something
  res.json( { status: "ok" } );
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

// Lines 1-7 and the line with app.listen are the boilerplate starting server code. We will ALWAYS need them.