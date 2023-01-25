let colors = ["red", "green", "blue"]; //리터럴을 이용한 배열 선언 및 배열 초기화

for (color in colors) {
  console.log(color, ",color:", colors[color]);
}
for (color of colors) {
  console.log("color:" + color);
}

const student = {
  name: "이순신",
  age: 45,
  address: "대전",
};

for (let key in student) {
  console.log(key, ",", student[key]);
  console.log(key + "," + student[key]);
};

let items = [
  { id: 1, name: "벤치프레스", count: 10 },
  { id: 2, name: "랫풀다운", count: 20 },
  { id: 3, name: "스쿼트", count: 30 },
];

for (let item of items) {
  console.log(item.id + item.name + item.count);
}
