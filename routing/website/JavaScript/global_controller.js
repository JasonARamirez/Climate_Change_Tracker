app.controller('global_controller', function($scope, $location, $http) {
  $('#btnHome').show();
  var search = $("#pac-input");
  search.show();

  if(search.val().length == 0){
    search.val('Not zero');
    search.keyup(function(e){
      if(e.keyCode == 13)
      {
        nextView(search.val(), $scope, $location);
      }
    });

    $('#backToGlobal').hide();

    $http.get("/global/getData").then(function(response) {
        var ctx = $('#myChart');
        ctx.empty();
        var chartInput = dataToChartSpecifics(response.data);
        $scope.loading = true;
        var myChart = new Chart(ctx, chartInput);
    });
  }
  else{
    search.val('');
  }
});
