var express = require('express');
var router = express.Router();

router.get('/index', function(req, res, next) {
  res.json({
    erro:0,
    data:[1,2,3]
  })
});

module.exports = router;
