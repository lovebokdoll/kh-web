//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
const fruits = ["๐", "๐", "๐ฅ"];
const fruits2 = ["๐", "๐", "๐"];

const fruits3 = ["๐ฅ", ...fruits2];

fruits3.forEach((fruit, index) => {
  console.log(`${index}-${fruit}`);
});

const fruits4 = [...fruits, ...fruits2];

fruits4.forEach(function (fruit, index) {
  console.log(`${index}-${fruit}`);
});

const dept = {
  deptno: 30,
  dname: "๊ฐ๋ฐ๋ถ",
  loc: "์ ์ฃผ",
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
console.log(emp2); //๋ฎ์ด์ฐ๊ธฐ๊ฐ ๋์๋ค overwrite์กฐ์ฌ

//์ค์ ์์ ์ฐ์ด๋ ํจํด !!
let items = [
  { id: 1, name: "๋ฒค์นํ๋ ์ค", count: 10 },
  { id: 2, name: "๋ซํ๋ค์ด", count: 20 },
  { id: 3, name: "์ค์ฟผํธ", count: 30 },
];

let items2 = [...items];
console.log(items2);

items2 = [...items, { id: 4, name: "๋ฐ๋๋ฆฌํํธ", count: 20 }];
console.log(items2);
