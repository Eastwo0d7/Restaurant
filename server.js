// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
// var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tableData = [
    {

    },
    {

    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation-form", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation-form.html"));
});

// Displays all characters
app.get("/reservation-view", function(req, res) {
    return res.json(characters);
});