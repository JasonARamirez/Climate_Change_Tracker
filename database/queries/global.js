var global_data = require('../models/global');
var globals_data = require('../collections/globals');

module.exports = {
  getData : function(callback){
    globals_data.query().then(function(allGlobalData){
      if(allGlobalData.length > 0){
        callback(null, allGlobalData);
      }
      else {
        callback(true, null);
      }
    });
  }
}
