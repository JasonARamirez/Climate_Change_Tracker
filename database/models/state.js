
var db = require('../db_config');

var state = db.Model.extend({
  tableName: 'Temps_by_State',
  hasTimestamps: false
});

module.exports = state;
