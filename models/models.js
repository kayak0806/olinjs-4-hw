var mongoose = require('mongoose');

var tweetSchema = mongoose.Schema({
  name: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tweet: String
});

var Tweet = mongoose.model('Tweet', tweetSchema);


var userSchema = mongoose.Schema({
    name: String
});

var User = mongoose.model('User', userSchema);

module.exports.User = User;
module.exports.Tweet = Tweet;