var express = require('express');
var router = express.Router();
var db=require('../database');


// to display registration form 
router.get('/meeting', function(req, res, next) {
    res.render('meeting-form');
  });
  
  // to store user input detail on post request
  router.post('/meeting', function(req, res, next) {
      
      inputData ={
          email:"reniljustin66@gmail.com",
          cname: req.body.cname,
          ctype: req.body.ctype,
          ccom: req.body.ccom,
          cdesc: req.body.cdesc,
          meetid: req.body.meetid,
      }
   var sql = 'INSERT INTO community SET ?';
   db.query(sql, inputData, function (err, data) {
      if (err) throw err;
           });
  var msg ="Community Event Added Successfully!";
 
 res.render('meeting-form',{alertMsg:msg});
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