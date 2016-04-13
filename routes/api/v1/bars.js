var express = require('express');
var router = express.Router();
var bars = require('../../../api/bars');
var _ = require('lodash');

/* GET list of bars */
router.get('/bars', function(req, res, next) {
  res.json(bars.bars);
});

/* SHOW one bar */
router.get('/bars/:bar_id', function(req, res, next) {
  bar = parseInt(req.params.bar_id);
  index = bar - 1;

  res.json(bars.bars[index])

});

/* SHOW one bars teams */
router.get('/bars/:bar_id/teams', function(req, res, next) {
  bar = parseInt(req.params.bar_id);
  index = bar - 1;

  res.json(bars.bars[index].teams)

});

module.exports = router;
