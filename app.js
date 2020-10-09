const express = require("express");
const app = express();
const bodyParser = require('body-parser')
app.set('view engine', 'ejs');
app.set("views", __dirname + "/front");
app.use("/front", express.static(__dirname + "/front"));
app.use(bodyParser.json())

// import routes
const generateTemplate = require('./routes/generateTemplate');

//routing
app.use('/generate', generateTemplate);

const port = 3000;
app.listen(port, function () {
  console.log("Listening on " + port);
});
