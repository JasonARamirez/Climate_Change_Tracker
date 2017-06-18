
var Country = require('../models/country');
var Countries = require('../collections/countries');
var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');
var conn = require('../conn');

module.exports = {
  setup : function(){
    var inputFile = 'global_temperature_data/GlobalLandTemperaturesByCountry.csv';

    var parser = parse({delimeter:','}, function(err, data){
      var listSize = data.length;
      var index = listSize - 1;
      async.whilst(
        function(){return index > 0},
        function(callback){
          var countries = [];
          for(var innerIndex = 0; innerIndex < 250000 && index > 0; innerIndex++){
            var line = data[index--];
            if(line != null){
              insertLine(line, countries);
            }
            data.pop();
          }
          var sql = 'INSERT INTO Temps_by_Country (Date, Country, AvgTemp) VALUES ?';

          conn.query(sql, [countries], function(err){
            if(err)throw err;
            callback();
          });
        },
        function(err){
          console.log('Finished Country');
          conn.end();
        }
      );
    });
    fs.createReadStream(inputFile).pipe(parser);
  },

  getData : function(country, callback){
    console.log('Getting Country: ' + country);
    Countries.query({where:{Country:country}}).fetch().then(function(countries){
      if(countries.length > 0){
        var models = countries.models;
        var countryArray = [];
        for(var index = 0; index < models.length; index++){
          countryArray.push(models[index].attributes);
        }
        callback(null, countryArray);
      }
      else {
        callback(true, null);
      }
    });
  }
}

var insertLine = function(line, countries){
  if (line[1].length > 0){
    var country = [
      line[0],
      line[3],
      line[1]
    ];

    console.log('\nCountry: ' + line[3] + '\nDate: ' + line[0] + '\nTemp: ' + line[1]);

    countries.push(country);
  }
}
