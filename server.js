const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const express = require('express');
const path = require("path");
const app = express()
const port = 8000

// This code enable POST parameters
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Displays index.html when accessing homepage ("/") in the browser
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/index.html'))
})

// Process the form inputs from this POST request
app.post('/send-mail', (request, response) => {
    // Displays the form parameters in the web server terminal
    console.log(request.body);

    // CODE HERE YOUR EMAIL SENDING FUNCTION

    return response.send('Email maybe sent ! ( if you did your job )');
})

// Create the web server
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})