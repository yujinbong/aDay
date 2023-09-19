navigator.geolocation.getCurrentPosition(function (located) {
  console.log(located);
  alert("success");
},function (located){console.log('Failed to retrieve location information.')});


const API_KEY = 'My API Key'; 

function onGeoOk(position) {
const lat = position.coords.latitude; //latitude
const lon = position.coords.longitude; //longitude


const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;




function handleSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
      latitude,
      longitude
  };
  getWeather(latitude, longitude); //얻은 좌표값을 바탕으로 날씨정보를 불러온다.
}


fetch(url).then(response => response.json()).then(data => {

    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    const weatherIconImg = document.querySelector('.weatherIcon');
   
    

    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    weatherIconImg.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`); //change the SRC Address! :)
});
}

function onGeoError() {
console.log("can't get information");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



