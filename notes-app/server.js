const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

// body parser extract body portion of entire incoming request streamand exposes it on req.body
// body parser ia piece of express middlewareb
// Configuring the database
const dbConfig = require('../notes-app/app/config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
app.get('/',(req,res) => {
    console.log('afrin');
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});
// require('./app/routes/note.routes.js')(app);
app.listen(3000, () =>{
    console.log("Server is listening on port 3000");
})
