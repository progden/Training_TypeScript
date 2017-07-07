/**
 * Created by progden on 2017/7/7.
 */
'use strict';

// node index.js
console.log("Hello World");

var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});