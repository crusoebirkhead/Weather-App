import { weatherRequest } from "./weatherRequest"

function printData(data){
    let base = document.createElement('p')
    document.body.appendChild(base)
    base.innerHTML += data.base

}

export {printData}
