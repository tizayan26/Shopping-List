const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Body Parser Middleware
app.use(bodyParser.json());

// DB Config

const db = require('./config/keys').mongoURI;

// Connect to Mongo
// mongoose.connect(db)
//     .then(() => console.log(err))
//     .catch(err => console.log(err));

//     const port  = process.env.PORT || 5000;

//     app.listen(port, () => console.log(`Server started on port ${port}`)); 
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://khan:poucher30@mernshoppinglist.zi4asgg.mongodb.net/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
//   const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});