//Nullish

console.log(null ?? 1);
console.log(false ?? 1 ?? 3);
console.log(0 ?? 1 ?? 3);

//OR연산자인 경우

const no = 0;
const num = no || 7;

console.log(num);

//Nullish병합 연산자를 이용하면 왼쪽부터 비교하는것은 OR연산자와 동일
//그러나 null,undefined는 건너 뛰고 나머지 데이터를 만나면 처음 만나자마자 반환해줌
const num2 = no ?? 7;
const num3 = null ?? 7;

console.log(num2);
console.log(num3);
