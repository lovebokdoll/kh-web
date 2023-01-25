//undefined : 값이 할당되지 않은 상태 - 기본적으로 갖는 값

let age = undefined;

console.log(age);

setTimeout(function(){ //콜백함수
  age = 10
  console.log(age);
},2000)//밀리세크 단위