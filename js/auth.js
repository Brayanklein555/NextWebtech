function login(){

let user=document.getElementById("user").value
let pass=document.getElementById("pass").value

if(user=="cliente" && pass=="1234"){

window.location="dashboard.html"

}else{

alert("Login inválido")

}

}
