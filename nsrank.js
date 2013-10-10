var urlReader = require('./urlReader');
var http = require('http');
var url = require('url');

urlReader.read(function (urlText) {

    var urlData = url.parse(urlText);

    var req = http.request({
        host: urlData.host,
        path: urlData.path,
        method: 'GET',
        port: 80
    });

    req.on('response', function (res) {
        var result = '';
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            result += chunk;
        });

        res.on('end', function () {
            console.log(result);
        });
    });

    req.end();
    
});