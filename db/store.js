const util = require("util");
const fs = require("fs");
const uuidv1 = require("uuid/v1"); 

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store { /// this is how to export them
    read() {
        console.log("read hit")
        return readFileAsync("./db/db.json", "utf8");
    }
    write(note) {
        // var oldData = ;

        emptyArray.push(note)

        var prePush = JSON.stringify(emptyArray, null, 4);

        writeFileAsync("./db/db.json", prePush, function(err) {
            if (err) throw err;
        })      
        
        return readFileAsync("./db/db.json", "utf8");

    }
    getNotes() {
        return this.read()
    } 
    addNote(note) {
        return this.write(note)
    }
    removeNote() {
        // return this.read()
    }

}

let emptyArray = []



module.exports = new Store();
