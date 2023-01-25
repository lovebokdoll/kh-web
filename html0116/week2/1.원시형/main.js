// 변수 선언시 var는 사용하지 않음 - 호이스팅때문
//const - 재할당 불가,상수관리
//let - 변하는 값 관리
const num = 5;
const pi = 3.14;
//num =1 => 재할당불가
let no = 3;
no = 6;
console.log(num);
console.log(no);

console.log(typeof pi);
console.log(typeof (num + undefined));
