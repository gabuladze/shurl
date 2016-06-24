'use strict';

process.env.PWD = process.cwd();
var path = require('path');

module.exports = function(app, db) {
  app.route("/")
    .get(function(req, res) {
      var index = path.join(process.env.PWD + "/public/index.html");
      res.sendFile(index, function(err) {
        if (err) {
          console.log(err);
          res.sendStatus(err.status);
        } else {
          console.log("SENT " + index);
        }
      });
  });

  app.route("/new")
    .get(function(req, res) {
      res.json({
        err: "Add a proper url!"
      })
    });
}
