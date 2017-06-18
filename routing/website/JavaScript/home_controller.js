app.controller('home_controller', function($scope, $location) {
  $('#btnHome').hide();
  $("#pac-input").hide();

  $scope.goToGlobal = function(){
    $location.path('/global_view');
  }
});
