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

app.get("/reservation-form.html", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation-form.html"));
});

// Displays all characters
app.get("/api/tables", function(req, res) {
    return res.json(tableData[0]);
});
app.get("/api/waitlist", function(req, res) {
    return res.json(tableData[1]);
});

app.get("/reservation-view.html", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation-view.html"));
});

// Create New table - takes in JSON input
app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    tableData.push(newReservation);
  
    res.json(newReservation);
  });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});