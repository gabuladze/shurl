'use strict'

module.exports = function(app, db) {
  app.route("/")
    .get(function(req, res) {
      var index = path.join(__dirname, "../public/index.html");
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
      res.send({
        err: "Add a proper url!"
      })
    })
}