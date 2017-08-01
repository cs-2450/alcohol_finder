var db = require('../db.js');

function find(id, done) {
  db.get().query('SELECT * FROM beverages where beverages.id = ?', id, function(err, result) {
    if (err) throw err;
    done(result[0]);
  });
}
exports.find = find;

exports.create = function(params, done) {
  db.get().query('INSERT INTO beverages (id, description, category, size, product_code, price, stat, on_special, special_price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', params, function(err, result) {
    if (err) return done(err);
    find(params[0], function (result) {
      done(result);
    });
  });
}

exports.search = function(description, done) {
  db.get().query('SELECT * FROM beverages WHERE beverages.description LIKE ?', '%' + description + '%', function(err, result) {
    if (err) throw err;
    done(result);
  });
}
