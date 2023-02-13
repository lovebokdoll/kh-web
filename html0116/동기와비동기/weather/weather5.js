import { weatherKey } from "../../apiKEY.js";

const getWeather = (local, callback) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=${weatherKey}&q=${local}&units=metric`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        resolve();
      });
  });
};
//promise가 반환하는 함수에서만 await을 붙여야 한다.
//console.log에는 await붙이지 않는다.
//async와await함께 사용된다.
const runTest = async () => {
  await getWeather("seoul");
  console.log("서울날씨 가져오기");
  await getWeather("pusan");
  console.log("부산날씨 가져오기");
  await getWeather("incheon");
  console.log("인천날씨 가져오기");
};
runTest();
/* 
날씨 제공하는 서버에 다녀오는(request와 response) 시간이 걸리므로
어느지역이 먼저 처리될 지 알 수 없다.
순서가 다를 수 있다.- 실행할 때 마다
호출하는 순서가 처리 순서를 의미하지 않는다.

문제제기
만일 순서를 보장하고 싶다면 ?
서울은 2초 부산은 3초 인천은 1초

콜백메소드 반복작성
들여쓰기, =()=> 반복해서 나온다

이러면 depth가 깊어진다. - 소스분석이 어렵다.
자바스크립트는 기본적으로 순서대로 처리된다 - 동기

순서가 맞지 않는것 - 비동기
*/
