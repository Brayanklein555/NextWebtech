function sendMessage(){

let input=document.getElementById("chatInput")

let text=input.value

let box=document.getElementById("chatBox")

box.innerHTML += "<p>Você: "+text+"</p>"

box.innerHTML += "<p>IA: Em breve terei respostas inteligentes.</p>"

input.value=""

}
