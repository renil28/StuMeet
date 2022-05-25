var express = require('express');
var router = express.Router();
var db=require('../database');

/* GET users listing. */
router.get('/remainder', function(req, res, next) {
    if(req.session.loggedinUser){
    var sql='SELECT * FROM users';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('remainder', { title: 'User List', userData: data});
    res.render('remainder',{email:req.session.email})
    });
    }
    else{
        res.redirect('/login');
    }
});
module.exports = router;