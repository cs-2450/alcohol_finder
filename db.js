var mysql = require('mysql');
var async = require('async');

var DEV_DATABASE = 'alcohol_finder_development';
var PROD_DATABASE = 'alcohol_finder_production';

exports.MODE_TEST = 'mode_test';
exports.MODE_PRODUCTION = 'mode_production';

var state = {
  pool: null,
  mode: null,
}

exports.connect = function(mode, done) {
  state.pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: mode === exports.MODE_PRODUCTION ? PROD_DATABASE : DEV_DATABASE
  });

  state.mode = mode;
  done();
}

exports.get = function() {
  return state.pool;
}
