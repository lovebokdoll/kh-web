const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT = "https://api.hnpwa.com/v0/item/@id.json";
const container = document.querySelector("#title");
const divcontent = document.createElement("div"); // 제목에 대한 상세내용

function getData(url) {
  xhr.open("GET", url, false);
  xhr.send();
  return JSON.parse(xhr.responseText);
}
//뉴스목록가져오기
function newsList() {
  const news = getData(NEWS);
  //li태그를 담을 배열 선언하기
  const getList = [];
  //li태그 담기전에 ul태그 먼저 담기
  getList.push("<ul>");
  for (let i = 0; i < 10; i++) {
    const div = document.createElement("div");
    getList.push(`
  <li>
  <a href='#${news[i].id}'>
  ${news[i].title}(${news[i].comments_count})
  </a>
  </li>
    `);
  }
  getList.push("</ul>");
  console.log(getList.join(""));
  //빈 문자열 주면 하나의 합쳐진 html문자열을 얻음
  container.innerHTML = getList.join("");
} //end of newsList

//뉴스 상세 내용보기
function newsDetail() {
  const id = this.location.hash.substring(1);
  const newscontent = getData(CONTENT.replace("@id", id));
  container.innerHTML = `
  <h1>${newscontent.title}</h1>
  <div>
  <a href='#'>목록으로</a>
  </div>
  `;
}

//라우터에서 화면 전환하기
function router() {
  //글 목록의 링크는 # 그러면  location.href에 #이 들어왔을텐데 이게 왜 참일까
  //location.href에 #만 들어오면 빈값을 반환 -> 그래서 이 코드가 작동하는 것임
  const routePath = location.hash;
  //첫 진입 일 때는 newList를 호출한다.
  if (routePath === "") {
    newsList();
  } else {
    newsDetail();
  }
}
window.addEventListener("hashchange", router);
router();
