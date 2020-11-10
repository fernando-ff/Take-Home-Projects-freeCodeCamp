if("geolocation" in navigator)
{
    navigator.geolocation.getCurrentPosition(function({coords}){
        const { latitude, longitude } = coords;
        console.log(latitude, longitude)
        fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${latitude}&lon=${longitude}`)
        .then(response => response.json())
        .then((data) => {
            var temp          =  document.getElementById('temp').innerHTML = data.main.temp + "°C";
            var humidity      =  document.getElementById('humidity').innerHTML = data.main.humidity + "%";
            var country       =  document.getElementById('country').innerHTML = data.sys.country;
            var city          =  document.getElementById('city').innerHTML = data.name;
            var main          =  document.getElementById('main').innerHTML = data.weather[0].main;
            var description   =  document.getElementById('description').innerHTML = data.weather[0].description;
            var wind_speed    = document.getElementById('wind-speed').innerHTML = data.wind.speed + " km/h";
            var wind_degree   = document.getElementById('wind-degree').innerHTML = data.wind.deg + "°";
            document.getElementById('temp').animate([
                // keyframes
                { bottom: '22px',opacity: 0.1 },
                { bottom: '21px',opacity: 0.25 },
                { bottom: '20px',opacity: 0.5 },
                { bottom: '19px',opacity: 0.75 },
                { bottom: '18px',opacity: 1 }
              ], { 
                // timing options
                duration: 200
              });
              document.getElementById('humidity').animate([
                // keyframes
                { bottom: '22px',opacity: 0.1 },
                { bottom: '21px',opacity: 0.25 },
                { bottom: '20px',opacity: 0.5 },
                { bottom: '19px',opacity: 0.75 },
                { bottom: '18px',opacity: 1 }
              ], { 
                // timing options
                duration: 200
              });
              document.getElementById('country').animate([
                // keyframes
                { bottom: '22px',opacity: 0.1 },
                { bottom: '21px',opacity: 0.25 },
                { bottom: '20px',opacity: 0.5 },
                { bottom: '19px',opacity: 0.75 },
                { bottom: '18px',opacity: 1 }
              ], { 
                // timing options
                duration: 200
              });
              document.getElementById('city').animate([
                // keyframes
                { bottom: '22px',opacity: 0.1 },
                { bottom: '21px',opacity: 0.25 },
                { bottom: '20px',opacity: 0.5 },
                { bottom: '19px',opacity: 0.75 },
                { bottom: '18px',opacity: 1 }
              ], { 
                // timing options
                duration: 200
              });
              document.getElementById('main').animate([
                // keyframes
                { bottom: '22px',opacity: 0.1 },
                { bottom: '21px',opacity: 0.25 },
                { bottom: '20px',opacity: 0.5 },
                { bottom: '19px',opacity: 0.75 },
                { bottom: '18px',opacity: 1 }
              ], { 
                // timing options
                duration: 200
              });
              document.getElementById('description').animate([
                // keyframes
                { bottom: '22px',opacity: 0.1 },
                { bottom: '21px',opacity: 0.25 },
                { bottom: '20px',opacity: 0.5 },
                { bottom: '19px',opacity: 0.75 },
                { bottom: '18px',opacity: 1 }
              ], { 
                // timing options
                duration: 200
              });
              document.getElementById('wind-speed').animate([
                // keyframes
                { bottom: '22px',opacity: 0.1 },
                { bottom: '21px',opacity: 0.25 },
                { bottom: '20px',opacity: 0.5 },
                { bottom: '19px',opacity: 0.75 },
                { bottom: '18px',opacity: 1 }
              ], { 
                // timing options
                duration: 200
              });
              document.getElementById('wind-degree').animate([
                // keyframes
                { bottom: '22px',opacity: 0.1 },
                { bottom: '21px',opacity: 0.25 },
                { bottom: '20px',opacity: 0.5 },
                { bottom: '19px',opacity: 0.75 },
                { bottom: '18px',opacity: 1 }
              ], { 
                // timing options
                duration: 200
              });
        });
    });
    
}
else
{
    alert("I'm sorry, but geolocation services are not supported by your browser.");
}
