//클래스값이면 .붙임 , 태그이름이면 안붙임

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
