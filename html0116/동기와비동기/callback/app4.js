//콜백(callback)
//파라미터로 함수가 올 수 있다.
//1.함수가 객체이기 때문에
//2.대입함수가 가능하다 [함수를 받는 변수선언이 가능하다]
const goodSearch = (callback) => {
  setTimeout(() => {
    console.log("상품조회");
    callback();
  }, 3000);
};
const cart = (callback) => {
  setTimeout(() => {
    console.log("카트담기");
    callback();
  }, 2000);
};
const account = (callback) => {
  setTimeout(() => {
    console.log("결제하기");
    callback();
  }, 4000);
};

const delivery = () => console.log("배송하기");

goodSearch(() => {
  cart(() => {
    account(() => {
      delivery();
    });
  });
});

/* 
이 처럼 순서대로 일처리 위해 콜백을 계속 반복해서 작성해야 하고
바깥쪽에서 안쪽으로 계속적이 들여쓰기가 되면서 해석하기도 불편하고
유지보수도 어려워 진다
이것을 콜백지옥이라고 한다
 */
