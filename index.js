require('dotenv').config();

const express = require('express');
const app = express();

// Declare routes that people can visit on the application.
// White Page
app.get('/', function (req, res) {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: white;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1>White Page</h1>
        </body>
    `)
});

// Teal Page
app.get('/:color', function (req, res) {
    let myColor = req.params.color
    function upperCaseFirst(string){
        return myColor.charAt(0).toUpperCase() + myColor.slice(1);
    }

    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: ${myColor};">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: ${myColor};">${upperCaseFirst()} Page</h1>
        </body>
    `)
});




app.listen(process.env.PORT);