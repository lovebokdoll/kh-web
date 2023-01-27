function Counter() {
  this.sum = 0;
  this.count = 0;
}
//prototype을 이용하면 나도 자바스트립트처럼
//사용자 정의 객체를 선언한 뒤 사용자 정의 함수를 정의할 수 있다.
Counter.prototype.add = function (array) {
  //array -> [2,5,9]
  array.forEach(function (item) {
    this.sum += item; //0->2->7->16
    ++this.count; //3
  }, this);
};
const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.sum);

//자바스크립트에서는 함수를 만들 때도 function
//객체를 선언할 때도 function
//객체가 정의하는 함수를 만들때는 prototype
//바닐라스크립트(순수한)에서는 전변에 대한 선언 없이도 생성자에서 초기화가 가능함
function Sonata() {
  this.WheelNum;
  this.speed;
  this.carName;
}

Sonata.prototype.stop = function (WheelNum) {
  console.log("stop호출" + WheelNum);
};

const myCar = new Sonata();
myCar.stop(4);
