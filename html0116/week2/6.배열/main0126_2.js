const { yellow } = require("colors");

//배열내장함수
const colors=['red','green','blue']

//toString():배열을 문자로 변환
const result =colors.toString()
console.log(typeof result);

//join():구분자를 활용해 문자열로 이어붙이기 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            자열로 이어붙이기
const result2 =colors.join("+")
console.log(result2);

//pop():배열의 마지막 요소제거(리턴값으로 잘라낸 요소 반환)
result =colors.pop()
console.log(result);
//push(): 배열의 끝부분에 새로운 요소 추가하고(리턴값으로 배열의 길이 반환)
result = color.push("yellow")
console.log(result)

//shift(): 배열의 첫부분요소제거(리컨값으로 잘라낸 요소 반환)
result = colors.shift()
console.log(result);

//unshift(): 배열의 첫부분에 새로운 요소투가(리턴값으로 길이변환)
result = colors.unshift("kiwi")
console.log(result);

//splice(삽입위치, 잘라냇 갯수,추가할 내용)-배렿레 새로운 요서 잘라서 붙임
console.splicr(1,0,"black")
console.log(colors)
//concat():두개배열 합치디
const color2=["cyan","brown"]
result=color.concst(color2)
console.log(result);

//slice():배열잘라내기 - 새로운 배열을 만들어서 잘라내기
result = colors.slice(1)
console.log(result)
result = colors.slice(1,-1)
console.log(result)

// const result2 = ['Object null"]
// console.log(restlr2.slicr(8,-1));