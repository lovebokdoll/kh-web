const ajax = new XMLHttpRequest();
const videoList = [];
const key = "AIzaSyDbZrOQv6nbvcL_0a8sXLyj9x5p_NvO3go";
const MOST_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${key}`;
ajax.open("GET", MOST_URL, false);
ajax.send(null);

const most = JSON.parse(ajax.response); // 아작스에서 응답 받아올때
const items = most.items;
console.log(items);
console.log(items.length);
videoList.push(`<ul class = "videos">`);
for (let i = 0; i < items.length; i++) {
  //25개의 li필요
  videoList.push(`<li class="container">`);
  videoList.push(`<div class="video">`);
  videoList.push(
    `<img class="thumbnail" src ='${items[i].snippet.thumbnails.medium.url}'/}>`
  );
  videoList.push(`<div >`);
  videoList.push(`<p class="title" >${items[i].snippet.title}></p>`);
  videoList.push(
    `<p class="channelTitle" >${items[i].snippet.channelTitle}></p>`
  );
  videoList.push(`</p>`);
  videoList.push(`</div>`);
  videoList.push(`</li>`);
}
videoList.push(`</ul >`);
document.querySelector("#root").innerHTML = videoList.join("");
