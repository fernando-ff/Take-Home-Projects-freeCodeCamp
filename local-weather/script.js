
if("geolocation" in navigator)
{
    navigator.geolocation.getCurrentPosition(function({coords}){
        const { latitude, longitude } = coords;
        console.log(latitude, longitude)
        fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${latitude}&lon=${longitude}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            // console.log(data.main);
            document.getElementById('temp').innerHTML = data.main.temp;
            document.getElementById('humidity').innerHTML = data.main.humidity;
            document.getElementById('country').innerHTML = data.sys.country;
            document.getElementById('city').innerHTML = data.name;
            document.getElementById('main').innerHTML = data.weather[0].main;
            document.getElementById('description').innerHTML = data.weather[0].description;
            document.getElementById('wind-speed').innerHTML = data.wind.speed;
            document.getElementById('wind-degree').innerHTML = data.wind.deg;

        });
    });
    
}
else
{
    alert("I'm sorry, but geolocation services are not supported by your browser.");
}
