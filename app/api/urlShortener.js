'use strict'

module.exports = function(app, db) {
  app.get("/new/:url*", addUrl);

  app.route("/:url")
    .get(getUrl);

  function addUrl(req, res) {
    var url = req.url.slice(5);
    if (!validateUrl(url)) {
      res.send({error: "Invalid URL!"})
    } else {
      var urlObj = {
        "original_url" : url,
        "short_url" : createShortUrl(url)
      };
      res.send(urlObj);
      saveUrl(urlObj);
    }
  }

  function getUrl(req, res) {
    // TODO
  }

  function saveUrl(urlObj) {
    var collection = db.collection("sites");
    collection.save(urlObj, function(err, res) {
      if (err) throw err;
      console.log("SAVED " + res);
    })
  }

  function createShortUrl(url) {
    var randNum = Math.floor(1000 + Math.random() * 9000).toString();
    var shortUrl = process.env.APP_URL + randNum;
    return shortUrl;
  }

  function validateUrl(url) {
    var regex = /^(?:(?:https?|http):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    return regex.test(url);
  }
}
