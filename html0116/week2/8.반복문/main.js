let colors = ["red", "green", "blue"];//리터널 이용한 배열 선언 및 초기화

//콜백함수 - 함수 호출할 때 인수로 함수가 들어가는 형태
//arr.forEach(callback(currentvalue[,index[,array]])[,thisArg])
//ES5-반복처리기능,유사배열도 처리해줌 ,ES6-순수배열
//이전상태
colors.forEach(function(color,index,items){//3번 반복
  console.log(color);//red green blue
  console.log(index);//0 1 2
  console.log(items);//전체 ["red", "green", "blue"] ["red", "green", "blue"] ["red", "green", "blue"]
})
console.log('=====================');
//이후버전 -React에서 자주나오는 패턴
colors.forEach((color)=>{
  console.log(color);
})
console.log('=====================');
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach
  colors.map(function(color,index,items){//3번 반복
  console.log(color);//red green blue
  console.log(index);//0 1 2
  console.log(items);//전체 ["red", "green", "blue"] ["red", "green", "blue"] ["red", "green", "blue"]
})

