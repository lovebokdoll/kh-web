var requestOptions = {
  method: "GET",
  redirect: "follow",
};

var requestOptions2 = {
  method: "GET",
  redirect: "follow",
};

const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
//제목을 클릭했을 때 보여줄 다중 댓글출력하기 위한 div생성하기
const content = document.createElement("div");

window.addEventListener("hashchange", () => {
  const id = this.location.hash.substr(1);
  fetch(CONTENT_URL.replace("@id", id), requestOptions2)
    .then((response) => response.json())
    .then((result) => {
      //<div><h1></div></h1>
      const title = this.document.createElement("h1");
      title.innerHTML = result.title;
      //13번에서 생성한 div태그에 넣기
      content.appendChild(title);
    })
    .catch((error) => console.log("error", error));
});

fetch(NEWS_URL, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    const news = result;
    const ul = document.createElement("ul");
    for (let i = 0; i < 10; i++) {
      const div = document.createElement("div");
      div.innerHTML = `
      <li>
        <a href='#${news[i].id}'>
        ${news[i].title}(${news[i].comments_count})
        </a>
     </li>
  `;
      ul.appendChild(div.firstElementChild);
    }
    document.getElementById("root").appendChild(ul);
    document.getElementById("root").appendChild(content);
  })
  .catch((error) => console.log("error", error));
