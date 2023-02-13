import * as all from "./module1.js";

console.log(all);
console.log(all.insa);
console.log(all.names);
// 매개변수로 함수를 받을 수 있다는 것은 함수각 객체라는 의미
//리턴타입을 함수로 사용가능 하다는 것은 고차함수
//변수가 함수를 참조할 수 있다는 것은 일급함수
//이런 것들이 가능한 객체를 일급객체
console.log(all.hap);

// const myCar = new Sonata();
// console.log("내 자동차의 바퀴수는 ${myCar.wheelNum}");
// myCar.speedUp();
// myCar.speedUp();
// myCar.speedUp();
// console.log("현재 소나타의 속도는 ${myCar.speed}");
