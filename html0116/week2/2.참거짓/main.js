//참거짓
//1)flase
//2)0 => 0이 아닌건 다 거짓!!{}:object,[]:Array참
//3)null
//4)undefined
//5)NaN
//6)빈문자열

if (500) {
  console.log("참");
}
if ("0") {
  //문자 0은 참
  console.log("참");
}
if (NaN) {
} else {
  console.log("NaN도 false");
}
if (null) {
} else {
  console.log("Null도 false");
}
if (undefined) {
} else {
  console.log("undefined도 false");
}
if ("") {
} else {
  console.log("빈문자열도 false");
}
