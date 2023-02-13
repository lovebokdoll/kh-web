import { weatherKey } from "../../apiKEY.js";

const getWeather = (local, callback) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=${weatherKey}&q=${local}&units=metric`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        resolve();
      });
  });
};

getWeather("seoul")
  .then(() => {
    console.log("서울날씨 가져오기");
    // return getWeather("pusan");
  })
  .then(() => {
    console.log("부산날씨 가져오기");
    return getWeather("pusan");
  })
  .then(() => {
    console.log("인천날씨 가져오기");
    return getWeather("incheon");
  });
