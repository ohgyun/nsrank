var fs = require('fs');

exports.read = function (callback) {
    fs.readFile('url.txt', {
        encoding: 'utf8'
    }, function (err, data) {
        if (err) {
            throw err;
        }
        callback(data);
    });
};