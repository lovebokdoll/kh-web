//데이터 타입

const a = 5;
console.log(typeof a);
console.log(typeof "이순신" == "string"); //값을 비교하고 싶을 때 == 두개!!
console.log(typeof a == "number");
console.log(typeof undefined == "undefined");
console.log(typeof null == "object");
console.log(typeof true == "boolean");
console.log(typeof [] == "object"); //배열
console.log(typeof {} == "object"); //객체
console.log(typeof function () {} == "function"); //객체

function methodA() {
  console.log("method A");
}
methodA();
console.log(methodA);

console.log([].constructor === Array); //타입도 같은지 물어볼때@@@ === 세개!!
console.log({}.constructor === Object);
console.log(Object.prototype.toString.call(null).slice(8, -1) === "Null");

function checkType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
console.log(checkType(null));
console.log(checkType(undefined));
