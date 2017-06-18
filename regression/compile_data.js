var city_query = require('../database/queries/city');
var country_query = require('../database/queries/country');
var global_query = require('../database/queries/global');
var state_query = require('../database/queries/state');
var regression = require('./regression');

module.exports = {
  getGlobalData : function(res){
    global_query.getData(function(err, data){
      if(err == null){
        res.send(JSON.stringify(compileData(data)));
      }
      else {
        res.send(JSON.stringify({message:'FAIL'}));
      }
    });
  },

  getCountryData : function(country, res){
    country_query.getData(country, function(err, data){
      if(err == null){
        res.send(JSON.stringify(compileData(data)));
      }
      else {
        res.send(JSON.stringify({message:'FAIL'}));
      }
    });
  },

  getStateData : function(state, country, res){
    state_query.getData(state, country, function(err, data){
      if(err == null){
        res.send(JSON.stringify(compileData(data)));
      }
      else {
        res.send(JSON.stringify({message:'FAIL'}));
      }
    });
  },

  getCityData : function(city, country, res){
    city_query.getData(city, country, function(err, data){
      if(err == null){
        res.send(JSON.stringify(compileData(data)));
      }
      else {
        res.send(JSON.stringify({message:'FAIL'}));
      }
    });
  }
}

var compileData = function(data){
  var formattedData = formatData(data);
  var futureDataEquation = regression(formattedData);
  var futureData = createFutureData(futureDataEquation, formattedData[0], formattedData[formattedData.length - 1]);
  return {currentData:formattedData, futureData:futureData};
}

var formatData = function(data){
  var dataArray = [];
  var allAverages = [];

  for(var index = 0; index < data.length; index++){
    var dataPoint = data[index];
    var date = getDate(dataPoint.Date.toDateString());

    if(dataArray[date] == null){
      dataArray[date] = [0, 0];
    }

    dataArray[date][0]++;
    dataArray[date][1] += dataPoint.AvgTemp;
  }

  for(var index = 0; index < dataArray.length; index++){
    if(dataArray[index] != null){
      getAverage(index, dataArray[index], allAverages);
    }
  }
  return allAverages;
}

var getDate = function(dateString){
  var length = dateString.length;
  var correctDateString = dateString.substring(length - 4, length);
  return parseInt(correctDateString);
}

var getAverage = function(year, dataPoint, allAverages){
  var yearAndTemp = [];
  var average = dataPoint[1] / dataPoint[0];
  yearAndTemp.push(year);
  yearAndTemp.push(average);

  allAverages.push(yearAndTemp);
}

var createFutureData = function(regressionData, firstYearData, lastYearData){
  var futureData = [];
  var m = regressionData.equation[0];
  var lastYear = lastYearData[0];
  var lastYearTemp = lastYearData[1];
  var firstYear = firstYearData[0];



  for(var year = firstYear - lastYear; year < 100; year++){
    var yearTempAverage = (m * year) + lastYearTemp;
    futureData.push([year + lastYear, yearTempAverage]);
  }

  return futureData;
}
