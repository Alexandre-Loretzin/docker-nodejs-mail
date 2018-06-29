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

    var nodemailer = require('nodemailer');

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport('smtps://845ba2291acc5b0d66153772b61c2fc1:65fb2a30bee428eec867c1e60df1ef40@in-v3.mailjet.com');

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"Simplon" <simplonienn.e@mailtest.simplon-roanne.com>', // sender address
        to: 'zzgael@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world ?', // plaintext body
        html: '<b>Hello world ?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });

    return response.send('Email maybe sent ! ( if you did your job )');
})

// Create the web server
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})