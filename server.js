var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var htmlroutes = require('./routes/htmlRoutes');
var apiroutes = require('./routes/apiRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(apiroutes)
app.use(htmlroutes)

app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT)
})