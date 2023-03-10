import { weatherKey } from "../../apiKEY.js";

const getWeather = (local, callback) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?appid=${weatherKey}&q=${local}&units=metric`
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      callback();
    });
};

getWeather("seoul", () => {
  console.log("서울날씨 가져오기");
  getWeather("pusan", () => {
    console.log("부산날씨 가져오기");
    getWeather("incheon", () => {
      console.log("인천날씨 가져오기");
    });
  });
});
