var express = require('express');
var router = express.Router();
var data = require('../lib/data.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Listing All People',
    data: data.all
  });
});

module.exports = router;
