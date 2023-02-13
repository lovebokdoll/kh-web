//콜백(callback)
//파라미터로 함수가 올 수 있다.
//1.함수가 객체이기 때문에
//2.대입함수가 가능하다 [함수를 받는 변수선언이 가능하다]
const goodSearch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("상품조회");
      resolve();
    }, 3000);
  });
};

const cart = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("카트담기");
      resolve();
    }, 2000);
  });
};

const account = () => console.log("결제하기");
goodSearch()
  .then(() => {
    return cart();
  })
  .then(() => {
    return account();
  });
