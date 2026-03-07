function gerarOrcamento(){

let tipo=document.getElementById("tipo").value

let preco=0

if(tipo=="site")preco=1500
if(tipo=="loja")preco=3000

document.getElementById("resultado").innerText="R$ "+preco

}
