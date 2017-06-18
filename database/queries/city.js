var City = require('../models/city');
var Cities = require('../collections/cities');
var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');
var conn = require('../conn');

module.exports = {
  setup : function(){
    var inputFile = 'global_temperature_data/GlobalLandTemperaturesByCity.csv';

    var parser = parse({delimeter:','}, function(err, data){
      var listSize = data.length;
      var index = listSize - 1;

      async.whilst(
        function(){return index > 0},
        function(callback){
          var cities = [];
          for(var innerIndex = 0; innerIndex < 250000 && index > 0; innerIndex++){
            var line = data[index--];
            if(line != null){
              insertLine(line, cities);
            }
            data.pop();
          }

          var sql = 'INSERT INTO Temps_by_City (Date, City, Country, AvgTemp) VALUES ?';

          conn.query(sql, [cities], function(err){
            console.log('Finished 250,000 Cities');
            if(err)throw err;
            callback();
          });
        },
        function(err){
          conn.end();
          console.log('Finished All Cities')
        }
      );
    });
    fs.createReadStream(inputFile).pipe(parser);
  },

  getData : function(city, country, callback){
    Cities.query({where:{City:city, Country:country}}).fetch().then(function(cities){
      if(cities.length > 0){
        var models = cities.models;
        var cityArray = [];
        for(var index = 0; index < models.length; index++){
          cityArray.push(models[index].attributes);
        }
        callback(null, cityArray);
      }
      else {
        callback(true, null);
      }
    });
  }
}

var insertLine = function(line, cities){
  if (line[1].length > 0){

    var cityArray = [
      line[0],
      line[3],
      line[4],
      line[1]
    ];

    console.log('\nCity: ' + line[3] + '\nDate: ' + line[0] + '\nTemp: ' + line[1]);

    cities.push(cityArray);
  }
}
