var config = require('./config');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sass = require('node-sass-middleware');
var path = require('path');
var nodemailer = require('nodemailer');

var routes = require('./routes/main');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Compile from main /Sass folder
app.use(
   sass({
       src: __dirname + '/sass/unsemantic',
       dest: __dirname + '/public/stylesheets',
       prefix:  '/stylesheets',
       debug: true,       
   })
); 

//Compile from unsemantic folder
app.use(
   sass({
       src: __dirname + '/sass',
       dest: __dirname + '/public/stylesheets',
       prefix:  '/stylesheets',
       debug: true,       
   })
); 

app.use(express.static( path.join( __dirname, 'public' ) ) );

app.use('/', routes);
app.use('/img', express.static('img'));
app.use('/fonts', express.static('fonts'));

// POST endpoint for contact form
app.post('/contact', function (req, res) {

  var mailOpts, smtpTrans;
  //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
  smtpTrans = nodemailer.createTransport('SMTP', {
      service: 'Gmail',
      auth: {
          user: config.gmail.username,
          pass: config.gmail.password 
      }
  });
  //Mail options
  mailOpts = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
      to: config.defaults.contact_send_to_email,
      subject: '[Contact Form] ' + req.body.subject,
      text: req.body.message
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
      //Email not sent
      if (error) {
          console.log(error);
          res.end(res.render('contact', { msg: 'Error occured, message not sent.', err: true, page: 'contact' }));
      }
      //Yay!! Email sent
      else {
          console.log("success");
          res.end(res.render('contact', { msg: 'Message sent! Thank you.', err: false, page: 'contact' }));
      }
  });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
