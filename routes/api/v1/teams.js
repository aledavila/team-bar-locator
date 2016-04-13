var express = require('express');
var router = express.Router();
var teams = require('../../../api/teams');
var _ = require('lodash');

/* GET list of teams */
router.get('/teams', function(req, res, next) {
  res.json(teams.teams);
});

/* SHOW one team */
router.get('/teams/:team_id', function(req, res, next) {
  team = parseInt(req.params.team_id);
  index = team - 1;

  res.json(teams.teams[index])

});

/* SHOW one teams bars*/
router.get('/teams/:team_id/bars', function(req, res, next) {
  team = parseInt(req.params.team_id);
  index = team - 1;

  res.json(teams.teams[index].bars)

});

module.exports = router;
