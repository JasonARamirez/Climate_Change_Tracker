var express = require('express');
var router = express.Router();
var compileData = require('../regression/compile_data');

router.get('/getData', function(req, res){
  var request = JSON.parse(req.param('request'));
  compileData.getStateData(request.state, request.country, res);
});

module.exports = router;
