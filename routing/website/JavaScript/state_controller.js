app.controller('state_controller', function($scope, $location, $http) {
  var search = $("#pac-input");

  $scope.updateMap = function(){
    $scope.state = search.val();
    search.val('');

    $http.get('/state/getData?request=' + getStateGraph($scope.state)).then(function(response) {
      var data = response.data;

      if(data.hasOwnProperty('message')){
        alert('State Data not found');
        backToGlobal();
      }
      else{
        $('#myChart').remove();
        var ctx = $('<canvas id="myChart"></canvas>');
        $('#forMyChart').append(ctx);
        var chartInput = dataToChartSpecifics(data);
        $scope.loading = true;
        var myChart = new Chart(ctx, chartInput);
      }
    });
  }

  if(search.val().length > 0){
    $('#backToGlobal').show();
    $scope.loading = false;
    $scope.updateMap();

    search.keyup(function(e){
      if(e.keyCode == 13)
      {
        nextView(search.val(), $scope, $location);
      }
    });
  }
});
