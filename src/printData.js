
function printData(data){
    let info = document.getElementById('info')

    let name = document.createElement('h3')
    info.appendChild(name)
    name.innerHTML = ''
    name.innerHTML += `Location: ${data.name}`
    name.classList.add('title')

    let countryDisplay = document.createElement('h3')
    info.appendChild(countryDisplay)
    countryDisplay.innerHTML = ''
    countryDisplay.innerHTML += `Country: ${data.sys.country}`
    countryDisplay.classList.add('title')

    let max = document.createElement('h3')
    info.appendChild(max)
    max.innerHTML = ''
    data.main.temp_max = Math.round((data.main.temp_max - 273.15) * 9/5 + 32)
    max.innerHTML += `Maximum: ${data.main.temp_max}`
    max.classList.add('title')

    let min = document.createElement('h3')
    info.appendChild(min)
    min.innerHTML = ''
    data.main.temp_min = Math.round((data.main.temp_min - 273.15) * 9/5 + 32)
    min.innerHTML += `Minimum ${data.main.temp_min}`
    min.classList.add('title')

    let feels = document.createElement('h3')
    info.appendChild(feels)
    feels.innerHTML = ''
    data.main.feels_like = Math.round((data.main.feels_like- 273.15) * 9/5 + 32)
    feels.innerHTML += `Feels Like: ${data.main.feels_like}`
    feels.classList.add('title')
}

export {printData}
