var express = require('express');
var router = express.Router();

const home = require('./home');
const view = require('./view');


router.get('/', home.get);
router.get('/view', view.get);


module.exports = router;
