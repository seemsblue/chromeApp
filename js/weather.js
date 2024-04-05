const API_KEY = "31c50e94c54d81efbc9eaacca963b8d5";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url).then(response=>response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:nth-child(2)");

        weather.innerText =`${data.weather[0].main} / ${data.main.temp}`;
        city.innerText=data.name;
    }); 
}

function onGeoErr(){
    alert("where R U??")
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoErr);