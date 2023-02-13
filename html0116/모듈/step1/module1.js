export default 1;

// 여러개를 사용할 때는 default이면 안됨
export const insa = "hello";
export const name = ["apple", "kiwi"];
export const hap = (i, j) => {
  return i + j;
};
export class Sonata {
  constructor() {
    this.wheelNum = 4;
    this.speed = 10;
  }
  speedUp = () => {
    this.speed = this.speed + 1;
  };
}
/* 
호이스팅 이슈
1) var i
2)head 태그안에 선언한 함수
3)import문 - 모듈사용 (ES6,브라우저지원)

함수선언
1)선언형 함수
2)익명함수 - 콜백함수 -> 나중에 실행하는 함수
★★★★★필요한 이유?★★★★★
전제조건 : 자바스크립트에서는 함수도 객체이다.
-자바스크립트는 동기적이기 때문에 : 순서대로 실행된다
3)대입함수 - 일급함수 -> 고차함수[리덕스(리액트 상태관리 구현한 것) 만드는데 결정적 역할] -리턴함수
const func =()=>{}
4)즉시 실행함수()() - ES6이전에는 호이스팅이슈 해결방법으로 사용하였다.
첫번째 ()선언
두번째()호출
*/
