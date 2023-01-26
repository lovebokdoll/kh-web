function1();
function2();

function function1() {
  console.log("1번 호출");
}
function function2() {
  console.log("2번 호출");
}

const function3 = function () {
  console.log("3호출");
}
function3();//함수 표현식에서는 호이스팅이 안일어난다
//함수 선언문에서도 호이스팅이 일어남
//함수
//함수도 객체이다 - 함수도 파라미터로 넘길수 있다
//메소드 오버라이딩,오버로딩에 대한 지원이 없음
//같은 이름의 함수를 중복정의 불가함
