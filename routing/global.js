var express = require('express');
var router = express.Router();
var compileData = require('../regression/compile_data');

router.get('/getData', function(req, res){
  compileData.getGlobalData(res);
});

module.exports = router;
