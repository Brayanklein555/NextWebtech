const responses = {
"site":"Criamos sites profissionais a partir de R$500.",
"logo":"Design de logos a partir de R$150.",
"ia":"Estamos desenvolvendo soluções de IA para empresas.",
"preço":"Depende do projeto. Posso gerar um orçamento."
}

function sendMessage(){

let input=document.getElementById("chat-input")
let msg=input.value.toLowerCase()

let chat=document.getElementById("chat-messages")

chat.innerHTML+=`<div>Você: ${msg}</div>`

let reply="Não entendi, mas podemos conversar pelo WhatsApp."

for(let key in responses){

if(msg.includes(key)){
reply=responses[key]
}

}

chat.innerHTML+=`<div>IA: ${reply}</div>`

input.value=""

}
