var express = require('express');
var router = express.Router();
var db=require('../database');

router.get("/adcommunity", function(request, response, next){

	var query = "SELECT * FROM community";

	db.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('adcommunity', {title:'College Community Events Management', action:'list', sampleData:data});
		}

	});

});

router.get("/addcommunity", function(request, response, next){

	response.render("adcommunity", {title:'Add Community Event', action:'add'});

});

router.post("/add_adcommunity", function(request, response, next){

	var cname = request.body.cname;

	var cdesc = request.body.cdesc;

	var ccom= request.body.ccom;

	var meetid = request.body.meetid;

	var query = `
	INSERT INTO community 
	(cname, cdesc, ccom, meetid) 
	VALUES ("${cname}", "${cdesc}", "${ccom}", "${meetid}")
	`;

	db.query(query, function(error, data){

		if(error)
		{
			throw error;
		}	
		else
		{
			response.redirect("/adcommunity");
		}

	});

});

router.get('/adcommunity/edit/:id', function(request, response, next){

	var id = request.params.id;

	var query = `SELECT * FROM community WHERE id = "${id}"`;

	db.query(query, function(error, data){

		response.render('adcommunity', {title: 'Edit Community', action:'edit', sampleData:data[0]});

	});

});

router.get('/adcommunity/delete/:id', function(request, response, next){

	var id = request.params.id; 

	var query = `DELETE FROM community WHERE id = "${id}"`;

	db.query(query, function(error, data){

		if(error)
		{
			throw error;
		}
		else
		{
			response.redirect("/adcommunity");
		}

	});

});


router.post('/adcommunity/edit/:id', function(request, response, next){

	var id = request.params.id;

	var cname = request.body.cname;

	var cdesc = request.body.cdesc;

	var ccom = request.body.ccom;

	var meetid = request.body.meetid;

	var query = `
	UPDATE community 
	SET cname = "${cname}", 
	cdesc = "${cdesc}", 
	ccom = "${ccom}", 
	meetid = "${meetid}" 
	WHERE id = "${id}"
	`;

	db.query(query, function(error, data){

		if(error)
		{
			throw error;
		}
		else
		{
			response.redirect('/adcommunity');
		}

	});

});

module.exports = router;








/* GET users listing. 
router.get('/events', function(req, res, next) {
    if(req.session.loggedinUser){
    var sql='SELECT * FROM users';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('events', { title: 'User List', userData: data});
    res.render('events',{email:req.session.email})
    });
    }
    else{
        res.redirect('/login');
    }
});
module.exports = router;
*/