var rootUrl = "https://reactagram-dev.firebaseio.com/";
var rootDb = "imageStream";
var likesDb = "likes";

module.exports = {
    rootUrl: rootUrl,
    rootDb: rootDb,
    fbImageStream: rootUrl + rootDb,
    fbLikes: rootUrl + likesDb
}

