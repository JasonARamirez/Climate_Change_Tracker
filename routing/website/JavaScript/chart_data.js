var dataToChartSpecifics = function(data){
  var currentData = data.currentData;
  var futureData = data.futureData;

  var labels = [];
  var currentDataPoints = [];
  var futureDataPoints = [];
  var datasets = [];

  for(var index = 0; index < currentData.length; index++){
    var data = currentData[index];
    currentDataPoints.push(data[1]);
  }

  datasets.push(new DatasetCurrent('Current Data', currentDataPoints));

  for(var index = 0; index < futureData.length; index++){
    var data = futureData[index];
    labels.push(data[0]);
    futureDataPoints.push(data[1]);
  }

  datasets.push(new DatasetFuture('Future Data', futureDataPoints));

  return new ChartInput(new Data(labels, datasets));
}
