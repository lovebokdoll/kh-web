const a = document.querySelector("a");

a.addEventListener("click", (event) => {
  event.preventDefault(); //이벤트 동작 중단시킨다.
  alert("e.preventDefault()");
});

const box = document.querySelector(".box");
box.addEventListener("mousemove", (event) => {
  // console.log(event);
  console.log(`현재 x축 위치 ${event.pageX}`);
  console.log(`현재 y축 위치 ${event.pageY}`);
});

window.addEventListener("mousewheel", (e) => {
  console.log(e);
  if (e.deltaY > 0) console.log("wheel down");
  if (e.deltaY < 0) console.log("wheel up");
});
// a.addEventListener('click',function(event){

// })
