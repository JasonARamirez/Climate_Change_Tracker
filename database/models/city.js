var db = require('../db_config');

var city = db.Model.extend({
  tableName: 'Temps_by_City',
  hasTimestamps: false
});

module.exports = city;
