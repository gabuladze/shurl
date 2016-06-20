var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3500;

app.listen(port, function() {
  console.log("Server started on " + port + "!");
});

app.get("/", function(req, res) {
  var index = path.join(__dirname, "/index.html");
  res.sendFile(index, function(err) {
    if (err) {
      console.log(err);
      res.sendStatus(err.status);
    } else {
      console.log("SENT " + index);
    }
  });
});
