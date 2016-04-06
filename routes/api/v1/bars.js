var express = require('express');
var router = express.Router();
var bars = require('../../../api/bars');
var _ = require('lodash');

/* GET list of bars */
router.get('/bars', function(req, res, next) {
  res.json(bars);
});

/* SHOW one bar */
router.get('/bars/:bear_id', function(req, res, next) {
  _.find(bars, function(bar) { 
        res.json(bar.id === parseInt(req.params.bear_id));
    });
});

module.exports = router;
