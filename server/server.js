const express = require('express');
const app = express();

const cors = require("cors");

//const url = 'mongodb://localhost:27017'
//This new url points to my MongodDB Atlas account.
const url = "mongodb+srv://players:3uuRu7uhGcHKA@cluster0.0uqzzoz.mongodb.net/?appName=mongosh+1.10.6"
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

// const dbName = 'scores_db';
// const db = client.db(dbName);

app.use(cors())
app.use(express.json());

MongoClient.connect(url, { useUnifiedTopology: true }  )
    .then((client) => {
        const db = client.db("scores_db")
        const usersCollection = db.collection("users")
        const usersRouter = createRouter(usersCollection);
        app.use("/api/scores_db", usersRouter)
    })
    .catch(console.err)
    app.listen(9000, function (){
        console.log(`Listening on port ${ this.address().port}`)
    })
