function calcular(){

let tipo=document.getElementById("tipo").value
let preco=0

if(tipo=="landing"){
preco=500
}

if(tipo=="site"){
preco=1200
}

if(tipo=="loja"){
preco=2000
}

document.getElementById("resultado").innerText=
"Estimativa: R$"+preco

}
