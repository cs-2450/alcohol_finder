var express = require('express');
var router = express.Router();
var Beverage = require('../models/beverage.js');

/* INDEX */
/* GET /beverages */
router.get('/', function(req, res, next) {
  Beverage.search(req.query.description, function(result) {
    res.send(result);
  });
});

/* SHOW */
/* GET /beverages/1 */
router.get('/:id', function(req, res, next) {
  Beverage.find(req.params.id, function(result) {
    res.send(result);
  });
});

module.exports = router;
