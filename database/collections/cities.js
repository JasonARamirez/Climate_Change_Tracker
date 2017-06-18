var db = require('../db_config');
var city = require('../models/city');
var cities = new db.Collection();
cities.model = city;

module.exports = cities;
