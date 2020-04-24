var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//



app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"))
    console.log("home")
})

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
    console.log("notes")
})  

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });