var express = require('express');
var router = express.Router();
var db=require('../database');
/* GET users listing. */
router.get('/admindashboard', function(req, res, next) {
    if(req.session.loggedinUser){
    var sql='SELECT * FROM admin';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('admindashboard', { title: 'User List', userData: data});
    res.render('admindashboard',{email:req.session.ademail})
    });
    }
    else{
        res.redirect('/admin');
    }
});
module.exports = router;