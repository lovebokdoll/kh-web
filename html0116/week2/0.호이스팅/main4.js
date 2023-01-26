// const text;//선언과 초기화를 한번에 해야한다. 재할당 안됨
//변수: 특정데이터값을 임시로 저장하는 공간
// -특정값을 자주 사용해야 할 떄
//- 반복적인 구문이 여러 코드에 걸쳐 빈번히 쓰일때
//변수 선언방식
//ES5 - var -호이스팅이슈발생 
//ES6[let or const사용할 것 ,arrow function가장 기본적인 것]
//변수 선언시 유의사항 
//1.숫자로 시작이 불가하다.
//2.특수문자 불가,예약어 불가, 대소문자 구분
const text = "dahee";//선언과 초기화를 한번에 해야한다. 재할당 안됨
// text = "dakoo";
console.log(text);
console.log(`하이하이${text}입니다`);

//const : 고정값
//let : 변경값

const 변수명="테스트"
console.log(변수명);