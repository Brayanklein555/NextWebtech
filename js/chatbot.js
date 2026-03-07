function sendMessage(){

let input=document.getElementById("input")

let msg=input.value

let box=document.getElementById("messages")

box.innerHTML+=`<p>Você: ${msg}</p>`

box.innerHTML+=`<p>IA: Ainda estou em desenvolvimento.</p>`

input.value=""

}
