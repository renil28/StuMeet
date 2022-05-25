var express = require('express');
var router = express.Router();
var db=require('../database');

// to display registration form 
router.get('/register', function(req, res, next) {
  res.render('registration-form');
});

// to store user input detail on post request
router.post('/register', function(req, res, next) {
    
    inputData ={
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
        usertype: req.body.usertype,
        collegename: req.body.collegename,
    }
// check unique email address
var sql='SELECT * FROM users WHERE email=?';
db.query(sql, [inputData.email] ,function (err, data, fields) {
 if(err) throw err
 if(data.length>1){
     var msg = "Email already exists. Try using another email!";
 }
 else if(inputData.password>8){
  var msg ="Password should be more than eight characters!";
 }
 else if(inputData.confirmpassword != inputData.password){
  var msg ="Password & Confirm Password doesn't Match";
}

 else{
     
    // save users data into database
  var sql = 'INSERT INTO users SET ?';
   db.query(sql, inputData, function (err, data) {
      if (err) throw err;
           });
  var msg ="You are successfully registered!";
 }
 res.render('registration-form',{alertMsg:msg});
})
     
});
module.exports = router;