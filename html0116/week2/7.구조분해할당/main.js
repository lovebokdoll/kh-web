const obj = {
  a: 1,
  b: 2,
  c: 3,
  e: null,
};
//구조분해시 같은 변수를 사용할 수 없다.
//필요한 것들만 꺼내서 사용하는것
const { a, b } = obj;
console.log(a);
console.log(b);
//console.log(e);
const { c } = obj;
//초기화도 가능
const { e = 5 } = obj;
const { y = 5 } = obj;
console.log(e);
console.log(y); //obj에 y가 없으니 14번에서 초기화된 값이 출력

const arr = [1, 2, 3, 4, 5];
const [i, j, ...rest] = arr;
const [i2, j2, ...abc] = arr;
console.log(i);
console.log(j);
console.log(rest);
