//openweathermap.org
const API_KEY = "1bdd52cf86677847cd97ece9f4a76d06";

const weather = document.querySelector(".js-weather");

const COORDS = "coords";

function getWeather(lat, lon) {
  //오늘의 핵심 API 리소스르르 취득하는 API
  //https://developer.mozilla.org/ko/docs/Web/API/Fetch_API
  //
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      console.log(response);
      //https://developer.mozilla.org/ko/docs/Web/API/Body/json
      //json()을 써서 body text를 JSON으로 바꾸는 결과로 해결되는 promise를 반환한다.
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `현재기온 : ${temperature} 도 @ 위치 : ${place}`;
    });
}
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    //latitude : latitude === latitude
    //키와 벨류가 같을때, 하나만 적어도 문법 상 가능하다.
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}
function handleGeoError() {
  console.log("Cant access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    console.log(parseCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
    //getWeather
  }
}
function init() {
  loadCoords();
}

init();
