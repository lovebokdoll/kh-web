//객체
//데이터를 property라는 인덱싱을 통해 구조적으로 묶어놓은 형태

const father = {
  name: "이순신",
  age: 55,
};
console.log(father);
console.log(father.name);
console.log(father["name"]);
let key = "name";
console.log(father[key]);
//====>변수에 접근하는 방법

function Student() {
  this.name = "강감찬";
  this.age = 56;
}

const student = new Student();
console.log(student);
console.log(student.name);
console.log(student["name"]);

const child = new Object();
child.name = "김유신";
child.age = 55;
console.log(child);
console.log(child.name);
console.log(child["name"]);

const studentA = {
  name: "정다희",
  age: 29,
};
const studentB = {
  name: "다쿠",
  age: 29,
  parent: studentA,
};
console.log(studentA);
console.log(studentB);

const students = [studentA, studentB];
//console.log(students[0]);
console.log(students[1]);
console.log(students[0].name);
 console.log(students[1]["parent"]["name"]);
