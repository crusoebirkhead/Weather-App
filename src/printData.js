
function printData(data){
    let info = document.getElementById('info')

    let name = document.createElement('h3')
    info.appendChild(name)
    name.innerHTML = ''
    name.innerHTML += data.name
    name.classList.add('title')

    let max = document.createElement('h3')
    info.appendChild(max)
    max.innerHTML = ''
    max.innerHTML += data.main.temp_max
    max.classList.add('title')

    let min = document.createElement('h3')
    info.appendChild(min)
    min.innerHTML = ''
    min.innerHTML += data.main.temp_min
    min.classList.add('title')

    let feels = document.createElement('h3')
    info.appendChild(feels)
    feels.innerHTML = ''
    feels.innerHTML += data.main.feels_like
    feels.classList.add('title')

    let countryDisplay = document.createElement('h3')
    info.appendChild(countryDisplay)
    countryDisplay.innerHTML = ''
    countryDisplay.innerHTML += data.sys.country
    countryDisplay.classList.add('title')
}

export {printData}
