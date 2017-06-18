var db = require('../db_config');
var state = require('../models/state');
var states = new db.Collection();
states.model = state;

module.exports = states;
