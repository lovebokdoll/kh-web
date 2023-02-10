//현재 페이지가 몇번째페이지인지 알고 있어야 한다.

const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT = "https://api.hnpwa.com/v0/item/@id.json";
const container = document.querySelector("#title");
const divcontent = document.createElement("div"); // 제목에 대한 상세내용
//페이징처리 -1setp
const store = {
  currentPage: 1, //현재 내가 바라보는 페이지 번호
};
// 전역변수로 선언한 왜냐면 상세보기 화면으로 갔다가 다시 목록으로 돌아갈때 이전 바라보던 페이지로 돌아가려면 이 값이 공유 되어야 함
// 따라서 전역변수로 처리할것
// 내가 바라보는 페이지가 2번이면
// i=(2-1)*10 =>10
// i<2*10 =>20
//따라서 10 11 12 13 14 ... 19
store.currentPage > 1 ? store.currentPage - 1 : store.currentPage + 1;

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
  for (let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {
    getList.push(`
  <li>
  <a href='#/show/${news[i].id}'>
  ${news[i].title}(${news[i].comments_count})
  </a>
  </li>
    `);
  }
  //배열의 맨 뒤에 추가하는 함수 push
  getList.push("</ul>");
  getList.push("<div>");
  getList.push(
    `<a href='#/page/${
      store.currentPage > 1 ? store.currentPage - 1 : 1
    }'>이전페이지</a>`
  );
  getList.push("<&nbsp;&nbsp;>"); //링크사이 띄어쓰기
  getList.push(`<a href='#/page/${store.currentPage + 1}'>다음페이지</a>`);
  getList.push("</div>");

  //빈 문자열 주면 하나의 합쳐진 html문자열을 얻음
  container.innerHTML = getList.join("");
} //end of newsList

//뉴스 상세 내용보기
function newsDetail() {
  const id = this.location.hash.substring(7); //상세보기시 앞에 #/show/가 있으니까
  const newsContent = getData(CONTENT.replace("@id", id));
  container.innerHTML = `
  <h1>${newsContent.title}</h1>
  <div>
  <a href="#/page/${store.currentPage}">목록으로</a>
  </div>
  `;
}

//라우터에서 화면 전환하기
function router() {
  //글 목록의 링크는 # 그러면  location.href에 #이 들어왔을텐데 이게 왜 참일까
  //location.href에 #만 들어오면 빈값을 반환 -> 그래서 이 코드가 작동하는 것임
  const routePath = location.hash;
  //첫 진입 일 때는 newList를 호출한다.
  //처음요청시에는 해시값이 없으니까 여기가 실행된다
  if (routePath === "") {
    newsList();
  } else if (routePath.indexOf("#/page/") >= 0) {
    //해시값중에서 숫자값만 추출하기
    //#을 제거하고 문자열길이 계산 후 문자열을 숫자로 바꾸어야 힘
    store.currentPage = Number(routePath.substring(7));
    newsList();
  } else {
    newsDetail();
  }
}

window.addEventListener("hashchange", router);
router();
