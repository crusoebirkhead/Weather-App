import { weatherRequest } from "./weatherRequest"

function printData(data){

    let name = document.createElement('p')
    document.body.appendChild(name)
    name.innerHTML += data.name

    let max = document.createElement('p')
    document.body.appendChild(max)
    max.innerHTML += data.main.temp_max

    let min = document.createElement('p')
    document.body.appendChild(min)
    min.innerHTML += data.main.temp_min

    let feels = document.createElement('p')
    document.body.appendChild(feels)
    feels.innerHTML += data.main.feels_like

    let countryDisplay = document.createElement('p')
    document.body.appendChild(countryDisplay)
    countryDisplay.innerHTML += data.sys.country

}

export {printData}
