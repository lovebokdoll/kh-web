(function (x) {
  const no1 = 1;
  const no2 = 2;
  console.log(no1 + no2);
})(2);
//즉시 실행함수를 사용하는 이유
//원하지 않는 영역으로 그 값이 빠져나가지 못하게 할 때 
//또는 즉시실행함수 내부의 값을 캡슐화 할 때 
//파라미터 자리는 꼭 일치하지 않더라도 정상적으로 호출이 일어난다.
//파라미터로 넘긴 값은 함수 내부에서 사용이 가능하다.