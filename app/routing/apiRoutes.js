var friends = require("../data/friends.js");
var path = require("path");


//This will export API routes
module.exports = function(app) {
    //list of all friends 
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    
    //best friend match
    var bestMatch = {
     name: "",
     image: "",
     friendDifference: 1000
    };
    
    var userData = req.body;
    var userName = userData.name;
    var userPhoto = userData.photo;
    var userScores = userData.scores; 

    var totalDifference = 0;



      for (var i = 0; i < friends.length; i++) {
        
        console.log(friends[i].name);
        totalDifference = 0;

        //loop through all the scores of each friend
        for (var j = 0; j < friends[i].scores[j]; j++) {
          
          totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
      
        if (totalDifference <= bestMatch.friendDifference) {
          //console.log("closest match found: " + totalDiffernce);
          
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }
    friends.push(userData);
    console.log(bestMatch);
    res.json(bestMatch)
  });
};
