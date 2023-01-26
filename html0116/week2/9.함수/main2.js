function func1() { //이름이 있는 함수임
  console.log('func1');
  func2(func1)
}

func1() //호출하기 위해서는 반드시 괄호가 있어야함

function func2(func1) { //이름이 있는 함수임
  console.log(func1);
}