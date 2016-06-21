'use strict'

var express = require('express');
var path = require('path');
var mongo = require('mongodb').MongoClient;
var routes = require('./app/routes/index.js');
var api = require('./app/api/urlShortener.js');
var app = express();
var dbUrl = process.env.MONGOLAB_URI || "mongodb://localhost:27017/shurl";

mongo.connect(dbUrl, function(err, db) {
  if (err) {
    throw err;
  } else {
    console.log("Successfully connected to Mongodb");
  }

  db.createCollection("sites", {
    capped: true,
    size: 5242880,
    max: 500
  });

  routes(app, db);
  api(app, db);

  var port = process.env.PORT || 3500;
  app.listen(port, function() {
    console.log("Server started on port " + port + "!");
  });
})
