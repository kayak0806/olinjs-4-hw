var User = require('../models/models').User;

exports.new = function(req, res){

  res.render('userNew', {title:'Login'});
};

exports.create = function(req,res){
    var flag = false;
    user = new User({name:req.body.userName});
    users = User.find().select('name').exec(function(err,docs){
        for(i in docs){
            if(user.name == docs[i].name){
                user = docs[i];
            }
        }
        if (flag){
            req.session.user = user;
            res.redirect('/');
        }
        else{
            user.save(function(){
                req.session.user = user;
                res.redirect('/');
            });
        }
    })
    
};