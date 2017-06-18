var State = require('../models/state');
var States = require('../collections/states');
var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');
var conn = require('../conn');

module.exports = {
  setup : function(){
    var inputFile = 'global_temperature_data/GlobalLandTemperaturesByState.csv';
    var parser = parse({delimeter:','}, function(err, data){
      var listSize = data.length;
      var index = listSize - 1;
      async.whilst(
        function(){return index > 0;},
        function(callback){
          var states = [];
          for(var innerIndex = 0; innerIndex < 250000 && index > 0; innerIndex++){
            var line = data[index--];
            if(line != null){
              insertLine(line, states);
            }
            data.pop();
          }

          var sql = 'INSERT INTO Temps_by_State (Date, AvgTemp, State, Country) VALUES ?';

          conn.query(sql, [states], function(err){
            if(err)throw err;
            callback();
          });
        },
        function(err){
          console.log('Finished State');
          conn.end();
        }
      );
    });
    fs.createReadStream(inputFile).pipe(parser);
  },

  getData : function(state, country, callback){
    States.query({where:{State:state, Country:country}}).fetch().then(function(states){
      if(states.length > 0){
        var models = states.models;
        var stateArray = [];
        for(var index = 0; index < models.length; index++){
          stateArray.push(models[index].attributes);
        }
        callback(null, stateArray);
      }
      else {
        callback(true, null);
      }
    });
  }
}

var insertLine = function(line, states){
  if (line[1].length > 0){
    var state = [
      new Date(line[0]),
      line[1],
      line[3],
      line[4]
    ];

    console.log('\nState: ' + line[3] + '\nDate: ' + line[0] + '\nTemp: ' + line[1]);

    states.push(state);
  }
}
