
var mer = 0
var ven = 0
var ter = 0
var mar = 0
var jup = 0
var sat = 0
var ura = 0
var net = 0

var Mercurio = document.getElementById("Mercurio")
var Venus = document.getElementById("Venus")
var Terra = document.getElementById("Terra")
var Marte = document.getElementById("Marte")
var Jupter = document.getElementById("Jupter")
var Saturno = document.getElementById("Saturno")
var Urano = document.getElementById("Urano")
var Netuno = document.getElementById("Netuno")



setInterval(()=>{
    mer++
    Mercurio.innerText = `Mercurio: ${mer}`
},2000)
setInterval(()=>{
    ven++
    Venus.innerText = `Venus: ${ven}`
},4000)
setInterval(()=>{
    ter++
    Terra.innerText = `Terra: ${ter}`
},6000)
setInterval(()=>{
    mar++
    Marte.innerText = `Marte: ${mar}`
},8000)
setInterval(()=>{
    jup++
    Jupter.innerText = `Jupter: ${jup}`
},20000)
setInterval(()=>{
    sat++
    Saturno.innerText = `Saturno: ${sat}`
},45000)
setInterval(()=>{
    ura++
    Urano.innerText = `Urano: ${ura}`
},65000)
setInterval(()=>{
    net++
    Netuno.innerText = `Netuno: ${net}`
},100000)






