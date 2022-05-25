var express = require('express');
var router = express.Router();
var db=require('../database');
/* GET users listing. 
router.get('/adfeedback', function(req, res, next) {
    if(req.session.loggedinUser){
    var sql='SELECT * FROM admin';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('adfeedback', { title: 'User List', userData: data});
    res.render('adfeedback',{email:req.session.ademail})
    });
    }
    else{
        res.redirect('/admin');
    }
});
*/
router.get("/adfeedback", function(request, response, next){

	var query = "SELECT * FROM feedback";

	db.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('adfeedback', {title:'Feedback', action:'list', sampleData:data});
		}

	});

});

module.exports = router;