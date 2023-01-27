//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
const fruits = ["🍏", "🍑", "🥕"];
const fruits2 = ["🍉", "🍒", "🍓"];

const fruits3 = ["🥑", ...fruits2];

fruits3.forEach((fruit, index) => {
  console.log(`${index}-${fruit}`);
});

const fruits4 = [...fruits, ...fruits2];

fruits4.forEach(function (fruit, index) {
  console.log(`${index}-${fruit}`);
});

const dept = {
  deptno: 30,
  dname: "개발부",
  loc: "제주",
};

const emp = {
  empno: 7566,
  ename: "SCOTT",
  sal: 2500,
};

const deptnemp = { ...dept, ...emp };
console.log(deptnemp);

const emp2 = { ...emp, empno: 7499, ename: "TIGER", sal: 3000 };
console.log(emp);
console.log(emp2); //덮어쓰기가 되었다 overwrite조심

//실전에서 쓰이는 패턴 !!
let items = [
  { id: 1, name: "벤치프레스", count: 10 },
  { id: 2, name: "랫풀다운", count: 20 },
  { id: 3, name: "스쿼트", count: 30 },
];

let items2 = [...items];
console.log(items2);

items2 = [...items, { id: 4, name: "데드리프트", count: 20 }];
console.log(items2);
