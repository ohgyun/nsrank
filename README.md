nsrank
======
네이버 실시간 검색어 가져오기
(Naver Search Ranks)

### 개요
ABC Talk #12 Node.js 시작하기의 실습 예제입니다.   
Slide: http://www.slideshare.net/OhgyunAhn/starting-nodejs  
  
Step01 ~ Step09까지의 브랜치로 개발 과정을 확인할 수 있습니다.

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
