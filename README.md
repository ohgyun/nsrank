nsrank
======
네이버 실시간 검색어 가져오기
(Naver Search Ranks)

### 커맨라인에서 출력하기
````
$ npm install nsrank -g # 글로벌로 인스톨

$ nsrank
````

### 모듈로 가져오기

````
$ npm install nsrank
````

````
var nsrank = require('nsrank');
nsrank.get(function (ranks) {
    console.log(ranks);
});
````
