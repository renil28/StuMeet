var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var registrationRouter = require('./routes/registration-route');
var loginRouter = require('./routes/login-route');
var dashboardRouter = require('./routes/dashboard-route');
var logoutRouter = require('./routes/logout-route');
var meetingRouter = require('./routes/meeting-route');
var remainderRouter = require('./routes/remainder-route');
var eventsRouter = require('./routes/events-route');
var communityRouter = require('./routes/community-route');
var usereventsRouter = require('./routes/userevents-route');
var adminRouter =  require('./routes/admin-route');
var admindashboardRouter = require('./routes/admindashboard-route')
var admincommunityRouter = require('./routes/adcommunity-route')
var adminfeedbackRouter = require('./routes/adfeedback-route')
var feedbackRouter = require('./routes/feedback-route')
var mainRouter = require('./routes/main-route')
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ 
  secret: '123456cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', registrationRouter);
app.use('/', loginRouter);
app.use('/', dashboardRouter);
app.use('/', logoutRouter);
app.use('/', meetingRouter);
app.use('/',remainderRouter);
app.use('/',eventsRouter);
app.use('/',communityRouter);
app.use('/',usereventsRouter);
app.use('/', adminRouter);
app.use('/', admindashboardRouter);
app.use('/', admincommunityRouter);
app.use('/',adminfeedbackRouter);
app.use('/',feedbackRouter);
app.use('/', mainRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
