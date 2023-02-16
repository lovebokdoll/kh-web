const btn = document
  .querySelector("#overlapButton")
  .addEventListener("click", overlapButton);

const id = document.getElementById("#mem_id");
id.addEventListener("click", function () {
  console.log("입력되었습니다");
});

// const initial = document.querySelector("#initial");
// const initial_1 = document.querySelector(".initial_1");
// initial.addEventListener("click", () => {
//   initial_1.value("");
// });

// function overlapButton() {
//   //const idValue = id.value;
//   // const special = /^[a-z][a-z0-9!@#]{6,12}$/;
//   id.style.backgroundColor = "green";
//   // if (special.test(idValue)) {
//   //   /* document.getElementById("#mem_id").style.backgroundColor = "green"; */
//   // } else {
//   //   id.style.backgroundColor = "red";
//   // }
// }
