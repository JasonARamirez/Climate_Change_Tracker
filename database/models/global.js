var db = require('../db_config');

var global_data = db.Model.extend({
  tableName: 'Global_Temps',
  hasTimestamps: false
});

module.exports = global_data;
