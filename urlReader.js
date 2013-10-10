var fs = require('fs');

// 파일의 내용 가져오기
fs.readFile('url.txt', {
    encoding: 'utf8' // 파일을 utf8 인코딩으로 읽어옵니다.
}, function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
});