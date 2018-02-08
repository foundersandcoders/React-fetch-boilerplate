const express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const app = express();

var someJSON = {data:7};
var someJstring = JSON.stringify (someJSON);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api', (req, res) => {
    res.send (someJstring)
  });

app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  // res.send("<p>500 error!</p>");
});

module.exports = app;
