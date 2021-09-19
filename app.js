var express = require("express");
var app = express();
var path = require("path");
 
 
//Sets up the Express App
var PORT = 8000;  //PORT always CAPS
 
 
// Sets up the Express app to handle data parsing
// for sending POST requests
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 
 
 
 
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/frenchtoast", function(req, res){
    res.sendFile(path.join(__dirname, "frenchtoast.html"))
});

app.get("/milkshake", function(req, res){
    res.sendFile(path.join(__dirname, "milkshake.html"))
});
app.get("/applewedges", function(req, res){
    res.sendFile(path.join(__dirname, "applewedges.html"))
});

app.get("/potatosalad", function(req, res){
    res.sendFile(path.join(__dirname, "potatosalad.html"))
});

app.get("/pumpkincake", function(req, res){
    res.sendFile(path.join(__dirname, "pumpkincake.html"))
});

app.get('*', function(req, res){
    res.status(404).send("Sorry, that page does not exist.");
  });
 
 
app.listen(PORT, function() { 
 
    console.log("app is listening on port" + PORT)
});

