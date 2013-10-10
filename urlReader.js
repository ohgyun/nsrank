var fs = require('fs');
var path = require('path');

exports.read = function (callback) {
    fs.readFile(path.join(__dirname, 'url.txt'), {
        encoding: 'utf8'
    }, function (err, data) {
        if (err) {
            throw err;
        }
        callback(data);
    });
};