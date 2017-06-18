
var db = require('../db_config');

var country = db.Model.extend({
  tableName: 'Temps_by_Country',
  hasTimestamps: false
});

module.exports = country;
