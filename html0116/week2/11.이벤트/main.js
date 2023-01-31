//클래스값이면 .붙임 , 태그이름이면 안붙임
//특정 name,id,class제한자지 않고 css선택자를 사용하여 요소를 찾는다.
//querySelector(#id) => id 값 id를 가진 요소를 찾습니다.
//querySelector(.class) => class 값 class를 가진 요소를 찾습니다.

const a = document.querySelector("a");
console.dir(a); //DOM구조를 봄
console.log(a);

a.onclick = () => {
  console.log("링크클릭");
};
a.onclick = () => {
  console.log("링크클릭다시");
};

a.addEventListener("click", () => {
  console.log("클릭클릭");
});

a.addEventListener("click", () => {
  console.log("클릭클릭다시");
});
