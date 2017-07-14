/**
 * Created by progden on 2017/7/7.
 */
'use strict';

// node index.js

var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

var hightlightTool = require("./js/umd");

app.get("/items", function(req, resp){
    resp.send({
            "code": "0000",
            "items": [
                {"name": "iPhone 7+", "price": 30000},
                {"name": "iPhone 7", "price": 20000}
        ]});
});

app.get("/testHighLight", function(req, resp){
    var msg = "Hello Wrold!";
    var keyword = "old";
    resp.send({
        msg: msg,
        keyword: keyword,
        rs: hightlightTool.highlight(msg, keyword)
    });
});