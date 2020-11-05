
if("geolocation" in navigator)
{
    navigator.geolocation.getCurrentPosition(function({coords}){
        const { latitude, longitude } = coords;
        console.log(latitude, longitude)
        fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${latitude}&lon=${longitude}`)
        .then(response => response.json())
        .then((data) => {

        });
    });
    
}
else
{
    alert("I'm sorry, but geolocation services are not supported by your browser.");
}
