const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT = "https://api.hnpwa.com/v0/item/@id.json";
const divcontent = document.createElement("div"); // 제목에 대한 상세내용

function getData(url) {
  xhr.open("GET", url, false);
  xhr.send();
  return JSON.parse(xhr.responseText);
}

const news = getData(NEWS);
const ul = document.createElement("ul");

//해시에 대한 이벤트처리 추가
//해시값이 변경되면 호출됨
window.addEventListener("hashchange", function () {
  // console.log("해시가 변경됨");
  // console.log(location.hash);
  const id = this.location.hash.substring(1);

  const newscontent = getData(CONTENT.replace("@id", id));
  const h1 = this.document.createElement("h1");
  console.log(newscontent.title);
  h1.innerHTML = newscontent.title;
  divcontent.appendChild(h1);
  // console.log(content);
});


for (let i = 0; i < 5; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `#${news[i].id}`;
  a.innerHTML = `${news[i].title}(${news[i].comments_count})`;
  li.appendChild(a);
  ul.appendChild(li);
} //end of for


document.querySelector("#title").appendChild(ul);
document.querySelector("#title").appendChild(divcontent);

