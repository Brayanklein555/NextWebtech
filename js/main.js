const counters=document.querySelectorAll("h2");

counters.forEach(counter=>{

let count=0;

let update=()=>{

count++;

counter.innerText=count;

if(count<100){

requestAnimationFrame(update)

}

}

update()

});

// MENU MOBILE

const toggle = document.getElementById("menuToggle")
const menu = document.getElementById("menu")

toggle.addEventListener("click", () => {

menu.classList.toggle("active")

})
