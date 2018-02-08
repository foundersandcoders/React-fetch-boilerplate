const express = require('express');
var path = require('path');
var app = require('./app');

const PORT = 8000;

app.listen(PORT, () => console.log('Express listening on port '+PORT));
