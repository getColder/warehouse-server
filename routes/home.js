var express = require('express');
var router = express.Router();


router.get('/data', function(req, res, next) {
  res.send('hellow home');
});

module.exports = router;
