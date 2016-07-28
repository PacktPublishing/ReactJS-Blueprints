//@flow
module.exports = function(){
var adjs = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy", "delicate", "quiet", "ancient", "purple", "lively", "nameless"];
var nouns = ["breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "frog", "smoke", "star"];
var rnd = Math.floor(Math.random() * Math.pow(2, 12));
return adjs[rnd % (adjs.length-1)] + "-" + nouns[rnd % (nouns.length-1)];
};

