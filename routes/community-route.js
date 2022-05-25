var express = require('express');
var router = express.Router();
var db=require('../database');

/* GET users listing. */
router.get('/community', function(req, res, next) {
    if(req.session.loggedinUser){
    var sql='SELECT * FROM community';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('community', { title: 'User List', userData: data});
    res.render('community',{email:req.session.email})
    });

    }
    else{
        res.redirect('/login');
    }
});

/* GET users listing. */
router.get('/community/offline', function(req, res, next) {
    if(req.session.loggedinUser){
    var sql='SELECT * FROM community where ctype = "offline" ';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('community', { title: 'User List', offData: data});
    res.render('community',{email:req.session.email})
    });

    }
    else{
        res.redirect('/login');
    }
});


module.exports = router;