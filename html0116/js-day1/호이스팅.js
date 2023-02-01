/* console.log(text);
text = "hello";
var x = text;
console.log(text); */

const btns = document.querySelectorAll("ul li");

//즉시실행함수:함수가 자기자신을 정의하자마자 바로 자신을 호출한다
//특정 원하는공간으로 값이 빠져나가지 못하게 할 때
//괄호가 2개 들어감
//첫번째 괄호 :함수의 선언부 의미
//두번째 괄호 : 함수 호출하는 괄호
//익명함수 형태인데 호출이 되는 이유는 두번째 괄호가 있기때문에 가능함
for (var j = 0; j < btns.length; j++) {
  ((index) => {
    btns[j].addEventListener(
      "click",
      () => {
        console.log(index);
      } //end of click event
    );
  })(j);

  /*  btns[j].addEventListener("click", () => {
    console.log(j); //0 1 2 or 3 3 3 */
} //end of for;
