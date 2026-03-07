function login(){

let user=document.getElementById("user").value
let pass=document.getElementById("pass").value

if(user=="admin" && pass=="1234"){

localStorage.setItem("login","true")

window.location="dashboard.html"

}else{

alert("Login inválido")

}

}
