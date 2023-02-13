//Promise prototype 활용
// let myFirstPromise = new Promise((resolve, reject) => {
//   // 우리가 수행한 비동기 작업이 성공한 경우 resolve(...)를 호출하고, 실패한 경우 reject(...)를 호출합니다.
//   // 이 예제에서는 setTimeout()을 사용해 비동기 코드를 흉내냅니다.
//   // 실제로는 여기서 XHR이나 HTML5 API를 사용할 것입니다.
//   setTimeout(function () {
//     resolve("성공!"); // 와! 문제 없음!
//   }, 250);
// });

const goodSearch = () => {
  //resolve성공시 콜백 , reject함수는 실패시 콜백
  return new Promise((resolve, reject) => {
    //고차함수 - 반환으로 함수
    setTimeout(() => {
      console.log("상품조회");
    }, 2000);
    resolve();
  });
};
const cart = () => console.log("카트담기");
//goodSearch함수 호출될 때 콜백에서 cart함수를 호출하면
//순서가 보장된단
goodSearch().then(() => {
  cart();
});
