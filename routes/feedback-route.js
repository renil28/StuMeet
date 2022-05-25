var express = require('express');
var router = express.Router();
var db=require('../database');


// to display registration form 
router.get('/feedback', function(req, res, next) {
    res.render('feedback');
  });
  
  // to store user input detail on post request
  router.post('/feedback', function(req, res, next) {
      
      inputData ={
          email: req.body.email,
          ftype: req.body.ftype,
          fdesc: req.body.fdesc,
          stars: req.body.stars,
      }
   var sql = 'INSERT INTO feedback SET ?';
   db.query(sql, inputData, function (err, data) {
      if (err) throw err;
           });
  var msg ="Feedback Submitted Successfully!";
 
 res.render('feedback',{alertMsg:msg});
});
     
       
module.exports = router;
/*
/* GET users listing. 
router.get('/meeting', function(req, res, next) {
    if(req.session.loggedinUser){
    var sql='SELECT * FROM users';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('meeting', { title: 'User List', userData: data});
    res.render('meeting',{email:req.session.email})
    });
    }
    else{
        res.redirect('/login');
    }
});


module.exports = router;
*/