const keyword = document.querySelector("#keyword");
keyword.addEventListener("keypress", (event) => {
  console.log("onkeypress =>" + event.keyCode);
  //사용자가 입력한 검색어를 찾는 함수 호출
  handleSearch();
});

//사용자가 입력한 검색어 읽어오기
const handleSearch = () => {
  const user = document.querySelector("#keyword").value;
  console.log("사용자가 입력한 검색어 ->" + user);
  search(user);
};
//사용자가 입력한 검색어로 조건검색 구하기
const search = (query) => {
  console.log("사용자가 입력한 bts받음:" + query);
  const ajax = new XMLHttpRequest();
  const searchList = [];
  const key = "AIzaSyDbZrOQv6nbvcL_0a8sXLyj9x5p_NvO3go";
  const search_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${key}`;

  ajax.open("GET", search_URL, false);
  ajax.send(null);

  const most = JSON.parse(ajax.response); // 아작스에서 응답 받아올때
  const searchItem = most.items;

  searchList.push(`<ul class = "videos">`);
  for (let i = 0; i < searchItem.length; i++) {
    //25개의 li필요
    searchList.push(`<li class="container">`);
    searchList.push(`<div class="video">`);
    searchList.push(
      `<img class="thumbnail" src ='${searchItem[i].snippet.thumbnails.medium.url}'/}>`
    );
    searchList.push(`<div >`);
    searchList.push(`<p class="title" >${searchItem[i].snippet.title}></p>`);
    searchList.push(
      `<p class="channelTitle" >${searchItem[i].snippet.channelTitle}></p>`
    );
    searchList.push(`</p>`);
    searchList.push(`</div>`);
    searchList.push(`</li>`);
  }
  searchList.push(`</ul >`);
  document.querySelector("#root").innerHTML = searchList.join("");
}; //end of search
