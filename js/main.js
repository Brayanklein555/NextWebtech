// animação contadores

document.querySelectorAll(".counter").forEach(counter=>{

let target=+counter.dataset.target
let count=0

let update=()=>{

count++

counter.innerText=count

if(count<target){
requestAnimationFrame(update)
}

}

update()

})
