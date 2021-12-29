navigator.geolocation.getCurrentPosition(function (located) {
    console.log(located);
    alert("success");
  },function (located){console.log('위치 정보를 불러오는데 실패했습니다.')});
  

const API_KEY = '16351cde385ac78c6f0e722e9ad5a171';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}

function onGeoError() {
  console.log("정보 가져올 수 없음");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
