const btnCart = document.querySelector("#btnCart");
//자바스크립트는 기본적으로 동적처리이다
// 그러나 실생활에서는 비동기적인 상황들이 훨씬많이 일어난다
btnCart.addEventListener("click", () => {
  setTimeout(() => {
    console.log("카트담기");
  });
});
console.log("여기");
