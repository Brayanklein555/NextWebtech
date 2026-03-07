fetch("data/projects.json")

.then(res=>res.json())

.then(data=>{

const container=document.getElementById("portfolio")

data.forEach(project=>{

const div=document.createElement("div")

div.className="project"

div.innerHTML=`<img src="${project.imagem}">`

container.appendChild(div)

})

})
