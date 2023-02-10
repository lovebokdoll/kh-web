const ajax = new XMLHttpRequest();
let content = "";
const key = "AIzaSyDbZrOQv6nbvcL_0a8sXLyj9x5p_NvO3go";
const MOST_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${key}`;
ajax.open("GET", MOST_URL, false);
ajax.send(null);

const most = JSON.parse(ajax.response); // 아작스에서 응답 받아올때
const items = most.items;
console.log(items);
console.log(items.length);
content += `<ul class = "videos">`;
for (let i = 0; i < items.length; i++) {
  //25개의 li필요
  content += `<li class="container">`;
  content += `<div class="video">`;
  content += `<img class="thumbnail" src ='${items[i].snippet.thumbnails.medium.url}'/}>`;
  content += `<div >`;
  content += `<p class="title" >${items[i].snippet.title}></p>`;
  content += `<p class="channelTitle" >${items[i].snippet.channelTitle}></p>`;
  content += `</p>`;
  content += `</div>`;
  content += `</li>`;
}
content += `</ul >`;
document.querySelector("#root").innerHTML = content;
