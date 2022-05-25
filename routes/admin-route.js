var express = require('express');
var router = express.Router();
var db=require('../database');
/* GET users listing. */
router.get('/admin', function(req, res, next) {
  res.render('admin');
});
router.post('/admin', function(req, res){
    var ademail = req.body.ademail;
    var adpassword = req.body.adpassword;
    var sql='SELECT * FROM admin WHERE ademail=? AND adpassword =?';
    db.query(sql, [ademail, adpassword], function (err, data, fields) {
        if(err) throw err
        if(data.length>0){
            req.session.loggedinUser= true;
            req.session.ademail= ademail;
            res.redirect('/admindashboard');
        }else{
            res.render('admin',{alertMsg:"Your Email Address or password is wrong"});
        }
    })
})
module.exports = router;