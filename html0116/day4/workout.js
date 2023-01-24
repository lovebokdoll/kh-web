const user = document.querySelector(".user_input");
const btnAdd = document.querySelector(".btn_add");

//시스템에서 이벤트 감지되었을 때 - 사용자가 버튼 누르면 !
btnAdd.addEventListener("click",function(e){/* 콜백함수 */
  console.log("push버튼 호출");
  addRow();
});

user.addEventListener("keypress", (e) => {
  console.log("key ==>" + e.key);
  if (e.key === "Enter") {
    console.log("enent 이벤트 호출성공");
    addRow();
  }
});

function addRow() {
  //사용자가 입력한 운동명을 받아온다.
  const workName = user.value;
  console.log(`사용자가 입력한 값=>${workName}`);
  if(workName ===""){
    user.focus();//커서의 위치를 input type = text로 가져옴
    return;//addRow탈출함
  }
  //위 조건을 수렴하지 않으면 input text를 초기화 한다.
  user.value="";
  user.focus();
}
