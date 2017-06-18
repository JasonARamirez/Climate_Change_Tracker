var db = require('../db_config');
var country = require('../models/country');
var countries = new db.Collection();
countries.model = country;

module.exports = countries;
