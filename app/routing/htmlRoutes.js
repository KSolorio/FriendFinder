var path = require("path");

module.exports = function(app) {

  //HOME
  app.get("/" , function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  //SURVEY
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname,  "../public/survey.html"));
  });


};
