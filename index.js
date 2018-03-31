var express = require('express');
var Gun = require('gun');

var app = express();
app.use(Gun.serve).use(express.static(__dirname));

var server = app.listen(3000);
Gun({file: 'data.json', web: server});