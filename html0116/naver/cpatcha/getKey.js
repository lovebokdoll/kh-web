const express = require("express");
const app = express();
const client_id = "srUTSGC0gjDuW52EEuPS"; //개발자센터에서 발급받은 Client ID
const client_secret = "XjsaO4Jj2d"; //개발자센터에서 발급받은 Client Secret
const code = "0";
app.get("/captcha/nkey", function (req, res) {
  //네이버 서버가 제안하는 URL주소 - 키값을 받아와야 한다.(인증과정이다)
  const api_url = "https://openapi.naver.com/v1/captcha/nkey?code=" + code;
  const request = require("request"); //네이버가 제공하는 url주소로 네이버서버에 요청을 해야하니까 request설치해야한다.
  //npm i -g request 를 그래서 설치한것
  const options = {
    url: api_url,
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});
app.listen(3000, function () {
  console.log("http://127.0.0.1:3000/captcha/nkey app listening on port 3000!");
});
