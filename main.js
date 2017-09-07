'use strict';

const fs = require('fs');
var pjson = require('./package.json');
var moment = require('moment');

var version=pjson.version;
var segment=version.split('.');
var newversion=segment[0] + '.' + segment[1] + '.' + moment(new Date()).utc().format('YYMMDDHHmm');
console.log(newversion);

pjson.version=newversion;

fs.writeFile("package.json",JSON.stringify(pjson,null,4), 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
}); 