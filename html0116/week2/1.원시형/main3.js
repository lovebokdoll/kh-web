//입력받는 값에 대한 유효성 검사도 js로 함


const a = 0.1;
const b = 0.2;
console.log(a + b);
//0.30000000000000004 출력
//toFixed()사용하여 0.3이 나오게 출력

//typeof 타입을 판별하는 연산자
console.log((a + b).toFixed(1)); //0.3
console.log(typeof (a + b).toFixed(1)); //string
console.log(typeof Number((a + b).toFixed(1))); //number
