books = {
    1984:"George Orwell",
    Book1:"Authur1"
}

const express = require('express');
//const title = require('title');

const app = express();
const port = process.env.PORT || 5000;
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/', (req, res) => {
  //req.params.title
  res.send();
});

// app.get('/:title', (req, res) => {
//   //books[req.params.title]});
//   res.send("hi");
// });