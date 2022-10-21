const d = document;
let select = d.getElementById("select")
let alto = d.getElementById("tbxAlto")
let ancho = d.getElementById("tbxAncho")
let largo = d.getElementById("tbxLargo")
let mInicial = d.getElementById("tbxMInicial")
let mFinal = d.getElementById("tbxMFinal")
let perimetro = d.getElementById("tbxPerimetro")
let capac = d.getElementById("capac")
let acpmInicial = d.getElementById("acpmInicial")
let acpmFinal = d.getElementById("acpmFinal")
let sum = d.getElementById("sum")

const options = ["Seleccione la opción",
                 "SUB-BASE",
                 "TANQUE VERTICAL",
                 "TANQUE HORIZONTAL"];

options.forEach(e => select.innerHTML += `<option value="${options.indexOf(e)}">${e}</option>`)

let subBases = d.getElementsByClassName("subBase")
let tanVerticales = d.getElementsByClassName("tanVer")
let tanHorizotales = d.getElementsByClassName("tanHor")

// alto.classList.add("hide")

function getSelectValue() {
    if (select.value == 1) {
        for(let t of tanHorizotales){
           t.classList.add("hide")
        }
        for(let t of tanVerticales){
            t.classList.add("hide")
        }
        for(let t of subBases){
            t.classList.remove("hide")
        }
    }
    else if (select.value == 2) {
        for(let t of subBases){
            t.classList.add("hide")
        }
        for(let t of tanHorizotales){
             t.classList.add("hide")
        }
        for(let t of tanVerticales){
             t.classList.remove("hide")
        }
    }
    else if (select.value == 3) {
        for(let t of subBases){
            t.classList.add("hide")
        }
        for(let t of tanVerticales){
             t.classList.add("hide")
        }
        for(let t of tanHorizotales){
             t.classList.remove("hide")
        }
    }
}

function calcular() {
    if (select.value == 0) {
        alert("Selecciona un tipo de tanque")
    }
    else if (select.value == 1) {
        capac.innerHTML = parseInt(alto.value) + parseInt(largo.value) + parseInt(ancho.value)
    }
    else if (select.value == 2) {
    }
    else if (select.value == 3) {
    }
}
