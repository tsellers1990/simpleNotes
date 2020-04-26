const path = require('path');
const store = require("../db/store");
const express = require("express");

module.exports = function(app) {
//get       /api/notes

app.get("/api/notes", function(req, res){
    console.log("backendNotes")
    store.getNotes().then(notes => {res.json(JSON.parse(notes))}).catch(err => res.status(500).json(err)) 
}) 

//post      /api/notes

app.post("/api/notes", function(req, res){
    var newNote = req.body;
    store.addNote(newNote).then(notes => {res.json(JSON.parse(notes))}).catch(err => res.status(500).json(err)) 

})

//delete    /api/notes
}
