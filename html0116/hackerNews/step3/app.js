const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
xhr.open("GET", NEWS, false);
xhr.send();
// console.log(xhr.responseText);
//document는 index.html전체를 받는 객체이므로 js에서 사용불가
// document.write(xhr.responseText);
const news = JSON.parse(xhr.responseText);
console.log(news);

// let element = document.createElement(tagName[, options]);
const ul = document.createElement("ul");
for (let i = 0; i < 10; i++) {
  //12번에서 생성한 ul태그 안에li태그를 배열의 길이만큼 반복해야된다.
  const li = document.createElement("li");
  //제목을 클릭하면 상세페이지 이동하기 위한 링크 추가
  const a = document.createElement("a");
  a.href = "#";
  a.innerHTML = `${news[i].title}(${news[i].comments_count})`;
  //15번에서 만들어진 li는 ul태그의 하위태그 붙임 -appendChild
  //var aChild = element.appendChild(aChild);
  li.appendChild(a);
  ul.appendChild(li);
} //end of for
// console.log(ul);
document.querySelector("#title").appendChild(ul);

// console.log(news[0].title);
// console.log(news[1].title);
// console.log(news[2].title);

//<<div HTMLElement받기>>
//const title = document.querySelector("#title");
// title잘 받아오는지 확인용! console.log(title);

//요청으로 반환되는 차입은 이미 text문자열이므로 JSON.stringify는 사용할 필요 없음
//이미 문자열이니까 JSON.parse사용해서 구조분해하면 된다. =>5번에 변수 선언하여 받아오기
//title.innerText = xhr.responseText;
//여기서 title만 받아오고 싶을 때
