// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

const port = 5500;

const express = require('express')
const app = express()

const bodyParser = require ('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Cors = require('cors');
app.use(Cors());

// respond with "hello world" when a GET request is made to the homepage
//app.get('/', (req, res) => {
  //res.send('hello world')
//})




// Start up an instance of app

app.listen(port, listening);
function listening(){
    console.log("server running"); 
    console.log(`running on localhost: ${port}`);
}

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.


// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));

app.get('/')


// Setup Server

