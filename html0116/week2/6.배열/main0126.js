//배열
//연관된 값들을 하나의 그룹으로 묶어서 나열한 자료구조

const colors=['red','green',,'blue']

console.log(colors);
console.log("===============");
// colors.forEach(callback(currentvalue[,index[,array]]))
//arrowFunction에서 [ES6]는 파라미터가 한개이면 괄호생략 가능
colors.forEach(function(color,index){ //함수의 이름이 없다-사용자 호출이 불가하다
console.log(color);
})
console.log("===============");
colors.forEach((color,index)=>{//함수의 이름이 없다
console.log(color);
})
console.log("===============");
colors.forEach(color=>{//함수의 이름이 없다,하나일 때는 괄호 생략할 수 있음!!
console.log(color);
})
console.log("===============");
colors.forEach(color=> console.log(color)) //arrowFunction에서 실행문이 단일행이면 {}생략가능함