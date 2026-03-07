fetch("data/projects.json")

.then(response => response.json())

.then(data => {

let container = document.getElementById("portfolio")

data.forEach(project => {

container.innerHTML += `

<div class="project">

<img src="${project.image}">

<h3>${project.name}</h3>

<p>${project.description}</p>

</div>

`

})

})
