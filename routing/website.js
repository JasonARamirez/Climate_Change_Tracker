var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.sendFile(__dirname + '/website/html/index.html');
});

router.get('/city_view.html', function(req, res){
  res.sendFile(__dirname + '/website/html/city_view.html');
});

router.get('/state_view.html', function(req, res){
  res.sendFile(__dirname + '/website/html/state_view.html');
});

router.get('/country_view.html', function(req, res){
    res.sendFile(__dirname + '/website/html/country_view.html');
});

router.get('/global_view.html', function(req, res){
  res.sendFile(__dirname + '/website/html/global_view.html');
});

router.get('/app.js', function(req, res){
  res.sendFile(__dirname + '/website/javascript/app.js');
});

router.get('/city_controller.js', function(req, res){
  res.sendFile(__dirname + '/website/javascript/city_controller.js');
});

router.get('/state_controller.js', function(req, res){
  res.sendFile(__dirname + '/website/javascript/state_controller.js');
});

router.get('/country_controller.js', function(req, res){
  res.sendFile(__dirname + '/website/javascript/country_controller.js');
});

router.get('/global_controller.js', function(req, res){
  res.sendFile(__dirname + '/website/javascript/global_controller.js');
});

router.get('/google_maps.js', function(req, res){
  res.sendFile(__dirname + '/website/javascript/google_maps.js');
});

router.get('/chart_data.js', function(req, res){
  res.sendFile(__dirname + '/website/javascript/chart_data.js');
});

router.get('/chart_input.js', function(req, res){
  res.sendFile(__dirname + '/website/javascript/chart_input.js');
});

router.get('/locationIdentifier.js', function(req, res){
  res.sendFile(__dirname + '/website/javascript/locationIdentifier.js');
});

router.get('/home_controller.js', function(req, res){
  res.sendFile(__dirname + '/website/javascript/home_controller.js');
});

router.get('/home_view.html', function(req, res){
  res.sendFile(__dirname + '/website/html/home_view.html');
});

module.exports = router;
