var path = require("path");

///~~~~~~~~~~~~~~~~~~~~~~~~front end routes~~~~~~~~~~~~~~~~~~~~
module.exports = function(app) {
app.get("/", function (req, res) { 
    console.log("home")
    
    res.sendFile(path.join(__dirname, "../public/index.html")) //~~~~~~~~~~~~move to htmlroutes.js
})

app.get("/notes", function (req, res) {
    console.log("notes")
    res.sendFile(path.join(__dirname, "../public/notes.html"))//~~~~~~~~~~~~move to htmlroutes.js
})  
}

