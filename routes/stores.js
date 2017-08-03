var express = require('express');
var router = express.Router();
var Store = require('../models/store.js');

/* INDEX */
/* GET /stores */
router.get('/', function(req, res, next) {
  Store.search(req.query.city, function(result) {
    res.send(result);
  });
});

/* SHOW */
/* GET /stores/1 */
router.get('/:id', function(req, res, next) {
  Store.find(req.params.id, function(result) {
    res.send(result);
  });
});

module.exports = router;
