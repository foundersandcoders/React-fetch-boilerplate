var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');                      //'html' isn't an engine
// INSTEAD USE:
// res.sendFile(path.join(__dirname, 'public', 'index.html'));
// OR
// res.type("text/html");
// res.send("<p>hello world!</p>");


// use these response headers to prevent CORS error if proxying doesn;t work
// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// /OLD STUFF
// app.use('/brains', express.static(path.join(__dirname, 'src', 'components')));
// app.use('/8080', function(req, res) {
//   console.log ("piping to- localhost:8080/" + req.url);
//   req.pipe(request("localhost:8080" + req.url)).pipe(res);
// });                                   /// test route for proxying webpacks bits through express rather than vice versa


app.use('/', index);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   // res.render('error');
//   // res.send("<p>500 error!</p>");
// });

module.exports = app;
