function gerar(){

let tipo=document.getElementById("tipo").value

let preco=0

if(tipo=="site")preco=1500
if(tipo=="loja")preco=3000
if(tipo=="design")preco=500

document.getElementById("valor").innerText="R$ "+preco

}
