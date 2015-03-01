var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use('/javascripts', express.static(__dirname + '/javascripts'));
var server = app.listen(process.env.PORT || 3000);