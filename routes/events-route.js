var express = require('express');
var router = express.Router();
var db=require('../database');

router.get("/events", function(request, response, next){

	var query = "SELECT * FROM events ORDER BY eventid DESC ";

	db.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('events', {title:'College Events Management', action:'list', sampleData:data});
		}

	});

});

router.get("/add", function(request, response, next){

	response.render("events", {title:'Add Events', action:'add'});

});

router.post("/add_events", function(request, response, next){

	var event_name = request.body.event_name;

	var event_cond = request.body.event_cond;

	var event_time = request.body.event_time;

	var event_place = request.body.event_place;

	var query = `
	INSERT INTO events 
	(event_name, event_cond, event_time, event_place) 
	VALUES ("${event_name}", "${event_cond}", "${event_time}", "${event_place}")
	`;

	db.query(query, function(error, data){

		if(error)
		{
			throw error;
		}	
		else
		{
			response.redirect("/events");
		}

	});

});

router.get('/events/edit/:eventid', function(request, response, next){

	var eventid = request.params.eventid;

	var query = `SELECT * FROM events WHERE eventid = "${eventid}"`;

	db.query(query, function(error, data){

		response.render('events', {title: 'Edit Events', action:'edit', sampleData:data[0]});

	});

});

router.get('/events/delete/:eventid', function(request, response, next){

	var eventid = request.params.eventid; 

	var query = `DELETE FROM events WHERE eventid = "${eventid}"`;

	db.query(query, function(error, data){

		if(error)
		{
			throw error;
		}
		else
		{
			response.redirect("/events");
		}

	});

});


router.post('/events/edit/:eventid', function(request, response, next){

	var eventid = request.params.eventid;

	var event_name = request.body.event_name;

	var event_cond = request.body.event_cond;

	var event_time = request.body.event_time;

	var event_place = request.body.event_place;

	var query = `
	UPDATE events 
	SET event_name = "${event_name}", 
	event_cond = "${event_cond}", 
	event_time = "${event_time}", 
	event_place = "${event_place}" 
	WHERE eventid = "${eventid}"
	`;

	db.query(query, function(error, data){

		if(error)
		{
			throw error;
		}
		else
		{
			response.redirect('/events');
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