var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Angular, Node and Twitter API' });
});

module.exports = router;
