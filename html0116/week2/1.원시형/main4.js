//undefined : 값이 할당되지 않은 상태 - 기본적으로 갖는 값

let age = undefined;

console.log(age);

setTimeout(function(){ //콜백함수
  age = 10
  console.log(age);
},2000)//밀리세크 단위

const dept ={
  deptno : 10,
  dname :'SALES',
  loc:'CHICAGO',
  boss:null
}
console.log(dept);
console.log(dept.dname);
console.log(dept.loc);
console.log(dept['deptno']);
console.log(dept['year']);
console.log(dept['']);
console.log(dept['boss']);