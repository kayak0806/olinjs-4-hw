var User = require('../models/models').User;
var Tweet = require('../models/models').Tweet;

exports.index = function(req, res){
  var user = req.session.user;
  var tweet = Tweet.find({})
                   .populate('name')
                   .sort('-_id')
                   .exec(function (err, docs){

    if(user) {
      var name=user.name;
      res.render('index', { title: 'Twit', user:name, Twits:docs });

    } 
    else{
      res.redirect('/users/new')
    }
  })
};

exports.create = function(req,res){
    tweet = new Tweet({name: req.session.user._id, tweet: req.body.aTweet})
    tweet.save(function(){
      res.redirect('/');
    });

}

exports.list = function(req,res){
  Tweet.find(function(err, foundTwits) {
    res.render('tweets', {Twits: foundTwits});
  });
}