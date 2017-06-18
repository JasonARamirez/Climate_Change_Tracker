var db = require('./database/db_config');
var app = require('express')();
//Server module
var http = require('http').Server(app);

var website = require('./routing/website');
app.use('/', website);

var global_data = require('./routing/global');
app.use('/global', global_data);

var country = require('./routing/country');
app.use('/country', country);

var state = require('./routing/state');
app.use('/state', state);

var city = require('./routing/city');
app.use('/city', city);

//Start listening on port 8080 on local host
http.listen(process.env.PORT || 3031, function(){
  console.log('listening on *:3031');
});
