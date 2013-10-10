var urlReader = require('./urlReader');
var http = require('http');

urlReader.read(function (url) {

    console.log(url);

    // http.request()로 보낼 수 있지만,
    // url을 host, path 등으로 나눠서 보내야해요.
    var req = http.request({
        host: 'www.naver.com',
        path: '/',
        port: 80
    });

    // 응답이 왔을 오면 아래 이벤트가 발생합니다.
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