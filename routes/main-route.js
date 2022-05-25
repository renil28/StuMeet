var express = require('express');
var router = express.Router();


// to display main page
router.get('/main', function(req, res, next) {
  res.render('main');
});

module.exports = router;