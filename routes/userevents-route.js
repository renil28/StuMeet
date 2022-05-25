var express = require('express');
var router = express.Router();
var db=require('../database');

/* GET users listing. */
router.get('/userevents', function(req, res, next) {
    if(req.session.loggedinUser){
    var sql='SELECT * FROM events';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('userevents', { title: 'User List', userData: data});
    res.render('userevents',{email:req.session.email})
    });

    }
    else{
        res.redirect('/login');
    }
});
module.exports = router;