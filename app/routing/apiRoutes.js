var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app) {
    //list of all friends 
   app.get("/api/friends", function(req, res) {
     res.json(friends);
   });
   app.post("/api/friends", function(req, res) {
     var userInput = req.body;
      //console.log("userInput: " + JSON.stringify(userInput));
     var userResponse = userInput.scores; 
      //console.log("userResponse: " + JSON.stringify(userInput));

      //best friend match
      var matchName = "";
      var matchImage = "";
      var totalDiffernece = 1000;

      for (var i = 0; i < friends.length; i++) {
        
        var diff = 0;
        for (var k = 0; k < userResponse.length; k++)
          diff += Math.abs(friends[i].scores[k] - userResponse[k]);
      }
        if (diff < totalDiffernece) {
          //console.log("closest match found: " + diff);
          //console.log("friend name: " + friends[i].name);
          //console.log("friend image: " + friends[i].photo);
          totalDifference = diff;
          matchName = friends[i].name;
          matchImage = friends[i].photo;
        }
    })
    friends.push(userInput);

    res.json({status: "ok", matchName: matchName, matchImage: matchImage})

 }
