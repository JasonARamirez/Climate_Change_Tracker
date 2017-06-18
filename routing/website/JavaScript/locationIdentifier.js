var countryView = '/country_view';
var stateView = '/state_view';
var cityView = '/city_view';

var splitUpLocation = function(locationString){
  return locationString.split(', ');
}

var nextView = function(stringData, $scope, $location){
  var index = splitUpLocation(stringData).length - 1;
  var currentLocation = $location.path();
  if(index == 0){
    $scope.$apply(function(){
      if(currentLocation == countryView){
        $scope.loading = false;
        $scope.updateMap();
      }
      else{
        $location.path(countryView);
      }
    });
  }
  else if(index == 1){
    $scope.$apply(function(){
      if(currentLocation == stateView){
        $scope.loading = false;
        $scope.updateMap();
      }
      else{
        $location.path(stateView);
      }
    });
  }
  else if(index == 2){
    $scope.$apply(function(){
      if(currentLocation == cityView){
        $scope.loading = false;
        $scope.updateMap();
      }
      else{
        $location.path(cityView);
      }
    });
  }
  else{
    alert('Incorrect Formatting');
  }
}

var getCountryGraph = function(country){
  return JSON.stringify({country:country});
}

var getStateGraph = function(stringData){
  var data = splitUpLocation(stringData);
  var state = data[0];
  var country = data[1];

  return JSON.stringify({state:state,country:country});
}

var getCityGraph = function(stringData){
  var data = splitUpLocation(stringData);

  var city = data[0];
  var country = data[2];

  return JSON.stringify({city:city,country:country});
}

var backToGlobal = function(){
  location.href = '/';
}
