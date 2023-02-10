const keyword = document.querySelector("#keyword");
//input textfield에 입력한 후 엔터 쳤을 때를 잡아내는 함수
keyword.addEventListener("keypress", (event) => {
  console.log("onkeypress =>" + event.keyCode);
  //사용자가 입력한 검색어를 찾는 함수 호출
  if (event.keyCode === 13) {
    handleSearch();
  }
});

//사용자가 입력한 검색어 읽어오기
const handleSearch = () => {
  const user = document.querySelector("#keyword").value;
  console.log("사용자가 입력한 검색어 ->" + user);
  search(user);
};
//video받아와서 구조분해해서 사용하면 안되나요?
//★★리액트에서는 가능함, 바닐라에서는 불가 => 덩어리(item)로 받아오기
let videoItem;
const videoShow = (id, title, description, channelTitle) => {
  videoItem = `
<section class="detail">
<iframe id="player" type="text/html" width="640" height="500"
  src="https://www.youtube.com/embed/${id}"
  frameborder="0"></iframe>
  <h2>${title}</h2>
  <h3>${channelTitle}</h3>
  <pre class="description">
  ${description}
  </pre>
  <div>
  <a href="./youtube.html">이전페이지</a>

</div>
  </section>
`;

  document.querySelector("#root").innerHTML = videoItem; //노드 접근
};

//사용자가 입력한 검색어로 조건검색 구하기
const search = (query) => {
  console.log("사용자가 입력한 bts받음:" + query);
  const ajax = new XMLHttpRequest();
  // 문자열로 처리하는 경우 훨씬 직관적이지만 정적이다 => 고정적임 =>결정된 상태여서 변화 가져올수 없음
  // 배열은 직관적이지 않지만 동적처리가 가능하다
  const searchList = [];
  const key = "AIzaSyDbZrOQv6nbvcL_0a8sXLyj9x5p_NvO3go";
  const search_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${key}`;

  ajax.open("GET", search_URL, false);
  ajax.send(null);

  const most = JSON.parse(ajax.response); // 아작스에서 응답 받아올때
  const searchItem = most.items;
  console.log(searchItem);
  let searchItem2;
  searchItem2 = most.items.map((item) => ({
    ...item,
    id: item.id.videoId,
  }));

  searchList.push(`<ul class = "videos">`);
  searchItem2.map((video) => {
    //25개의 li필요

    //비지오 제목의 경우 특수문자(괄호문제)배제하는 정규식을 이용해야한다.
    const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    const str = video.snippet.title.replace(reg, "");
    //자바스크립트에서는 파라미터로 값을 넘길 때 반드시 싱글쿼테이션 or더블쿼테이션 붙여야 값으로 인정된다.
    //만일 붙이지 않으면 XXX is not defined라고 뜬다 => 결론은 변수 취급되어 안됨
    searchList.push(
      `<li class="container" onclick="videoShow('${video.id}','${str}','${video.snippet.description}','${video.snippet.channelTitle}')">`
    );

    searchList.push(`<div class="video">`);
    searchList.push(
      `<img class="thumbnail" src="${video.snippet.thumbnails.medium.url}">`
    );
    searchList.push(`<div >`);
    searchList.push(`<p class="title" >${video.snippet.title}></p>`);
    searchList.push(
      `<p class="channelTitle" >${video.snippet.channelTitle}></p>`
    );
    searchList.push(`</p>`);
    searchList.push(`</div>`);
    searchList.push(`</div>`);
    searchList.push(`</li>`);
  }); //end of map
  searchList.push(`</ul >`);
  document.querySelector("#root").innerHTML = searchList.join("");
}; //end of search
