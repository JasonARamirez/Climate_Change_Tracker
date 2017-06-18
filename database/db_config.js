/**
Configure the db by creating various tables
*/

//knex object that will establish a connection to the mySQL db on the server
var knex = require('knex')({
  client: 'mysql',
  connection: {
   host: 'mysql.cs.iastate.edu',
   user: 'dbu319t11',
   password: 'crA2?bru',
   database: 'db319t11'
 }
});

//bookshelf object creation
var db = require('bookshelf')(knex);

//first check if the table exists in the db
db.knex.schema.hasTable('Global_Temps').then(function(exists) {
  if (!exists) {
    //create a table in the db using knex's createTable method
    db.knex.schema.createTable('Global_Temps', function(table) {
      table.increments('id').primary();
      table.dateTime('Date');
      table.double('AvgTemp');
    }).then(function(table) {
      console.log('created table :', 'Global_Temps');
    });
  }
});

//first check if the table exists in the db
db.knex.schema.hasTable('Temps_by_City').then(function(exists) {
  if (!exists) {
    //create a table in the db using knex's createTable method
    db.knex.schema.createTable('Temps_by_City', function(table) {
      table.increments('id').primary();
      table.dateTime('Date');
      table.string('City', 100);
      table.string('Country', 100);
      table.double('AvgTemp');
    }).then(function(table) {
      console.log('created table :', 'Temps_by_City');
      var cityQuery = require('./queries/city');
      cityQuery.setup();
    });
  }
});


db.knex.schema.hasTable('Temps_by_Country').then(function(exists) {
  if (!exists) {
    //create a table in the db using knex's createTable method
    db.knex.schema.createTable('Temps_by_Country', function(table) {
      table.increments('id').primary();
      table.dateTime('Date');
      table.string('Country', 100);
      table.double('AvgTemp');
    }).then(function(table) {
      //print to user that it created the Users table
      console.log('created table :', 'Temps_by_Country');
      var countryQuery = require('./queries/country');
      countryQuery.setup();
    });
  }
});

db.knex.schema.hasTable('Temps_by_State').then(function(exists) {
  if (!exists) {
    //create a table in the db using knex's createTable method
    db.knex.schema.createTable('Temps_by_State', function(table) {
      table.increments('id').primary();
      table.dateTime('Date');
      table.string('State', 100);
      table.string('Country', 100);
      table.double('AvgTemp');
    }).then(function(table) {
      //print to user that it created the Users table
      console.log('created table :', 'Temps_by_State');
      var stateQuery = require('./queries/state');
      stateQuery.setup();
    });
  }
});


module.exports = db;
