// 상대 경로로 다른 모듈을 가져옵니다.
var urlReader = require('./urlReader');

urlReader.read(function (url) {
    // 가져온 URL로 출력하기
    console.log(url);
});