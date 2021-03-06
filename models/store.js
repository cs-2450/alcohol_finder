var db = require('../db.js');

function find(id, done) {
  db.get().query('SELECT * FROM stores where stores.id = ?', id, function(err, result) {
    if (err) throw err;
    done(result[0]);
  });
}
exports.find = find;

exports.create = function(params, done) {
  db.get().query('INSERT INTO stores () VALUES (?, ?)', params, function(err, result) {
    if (err) return done(err);
    find(params[0], function(result) {
      done(result);
    });
  });
}

exports.search = function(city, done) {
  db.get().query('SELECT * FROM stores WHERE stores.city LIKE ?', '%' + city + '%' , function(err, result) {
    if (err) throw err;
    done(result);
  });
}
