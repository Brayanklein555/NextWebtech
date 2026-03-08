fetch("data/projects.json")

.then(r=>r.json())

.then(data=>{

let container=document.getElementById("portfolio")

data.forEach(p=>{

let div=document.createElement("div")

div.className="project"

div.innerHTML=`<img src="${p.imagem}">`

container.appendChild(div)

})

})
