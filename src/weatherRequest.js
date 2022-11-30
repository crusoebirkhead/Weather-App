let city = ''
let country = ''
let btn = document.getElementById('search')
btn.onclick = weatherRequest

export async function weatherRequest(city, country) {

  city = document.getElementById('city').value
  country = document.getElementById('country').value
  
  try {

  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&sys.country=${country}&APPID=46dad100c013cf682570bfda9e36abf6`, {mode: 'cors'});
  const data = await response.json();
  console.log(data);
  return data

  } catch (error){
    alert('this b broken')
  }
  
}

