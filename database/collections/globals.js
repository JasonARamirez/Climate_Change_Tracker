var db = require('../db_config');
var global_data = require('../models/global');
var globals_data = new db.Collection();
globals_data.model = global_data;

module.exports = globals_data;
