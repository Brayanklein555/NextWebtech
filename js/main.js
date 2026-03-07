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
