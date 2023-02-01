// const { addListener } = require("nodemon");

const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
  .then((response) => response.json())
  //.then((result) => console.log(result))
  .then((result) => {
    //ul 태그를 js를 활용해서 생성하는 문장 =>createElement!!
    const ul = document.createElement("ul"); //DOM API-구조가 잘 안보임
    for (let i = 0; i < 10; i++) {
      //반복문
      const li = document.createElement("li");
      //<li>뉴스제목</li>
      console.log(result[i].title);
      li.innerHTML = result[i].title;
      //for문에서 만들어진 li태그를 ul태그에 넣는 문장
      ul.appendChild(li);
      //console.log(result[i].title);
    } // end of for
    //news.html문서의 body에 정의된 <div id=root><ul></ul></div>
    document.getElementById("root").appendChild(ul);
  })
  //에러발생하면 그 때 출력
  .catch((error) => console.log("error", error));
