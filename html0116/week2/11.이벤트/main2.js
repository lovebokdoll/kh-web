//이벤트가 발생한 대상 알아내기
/*
 *a.target : 마우스포인터 위치에 있는 요소반환
 *a.currentTarget : 이벤트 문 상에서 선택자 요소를 반환 
 */

const main = document.querySelector("main");

main.addEventListener("click", (e) => {
  console.log(e.currentTarget);
  console.log(e.target);
});
