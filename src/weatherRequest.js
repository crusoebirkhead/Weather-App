
async function weatherRequest() {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=46dad100c013cf682570bfda9e36abf6', {mode: 'cors'});
  const weatherData = await response.json();
  console.log(weatherData);
}

export {weatherRequest, weatherData}