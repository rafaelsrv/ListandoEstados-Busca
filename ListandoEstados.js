
function listar () {
    
    const url  = "dados/estados.json"
    axios(url).then(dados =>{
       const listagem = dados.data.reduce(
        (html ,estado) => html + `<li class="animal">${estado.nome}</li>`, ''
        
        
    )
    document.body.insertAdjacentHTML('beforeend', `<ul>${listagem}</ul>`)

    })
}
function search (){
let input = document.getElementById('searchInput').value
input = input.toLowerCase()
console.log(input)
let x = document.getElementsByClassName('animal')




for (i = 0; i < x.length; i++) { 
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display="none";
    }
    else {
        x[i].style.display="list-item";                 
    }
}
}
