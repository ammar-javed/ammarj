var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home'); 
});

/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render('about'); 
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
    res.render('projects'); 
});

/* GET Experiences page. */
router.get('/exp', function(req, res, next) {
    res.render('experiences'); 
});

module.exports = router;