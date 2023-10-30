
function listar () {
    
    const url  = "dados/estados.json"
    axios(url).then(dados =>{
       const listagem = dados.data.reduce(
        (html ,estado) => html + `<li>${estado.nome}</li>`, ''
        
        
    )
    document.body.insertAdjacentHTML('beforeend', `<ul>${listagem}</ul>`)

    })
}
