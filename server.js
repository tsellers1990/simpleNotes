var express = require("express");
var path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use(express.static('public')) //this only allows the users to see what's in the public folder  (hides backend) 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });