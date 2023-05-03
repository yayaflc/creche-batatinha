const listaGatinhos = (img, username, tutor, id) => {
    return fetch(`https://64503b16ba9f39c6ab760fc2.mockapi.io/api/v1/users`)
    .then(resposta => {
        if(resposta.ok){
            
            return resposta.json()
            
        }
        throw new Error('Não foi possível listar os clientes')
    })
} 


const criaNovaLinha = (img, username, id) => {
    const linhaNovoGatinho = document.createElement('main')
    const conteudo = `
    <div class="clientes">
        <figure>
            <img src=${img} alt="Gatinho"><figcaption>${username}</figcaption>
        </figure>
        <button type="submit" class="lancaNotas"><a href="./lancamento-de-notas.html?id=${id}">Lançar Notas</a></button>
    </div>
    `
    linhaNovoGatinho.innerHTML = conteudo
    linhaNovoGatinho.dataset.id = id
    
    return linhaNovoGatinho
};

const quadro = document.querySelector('[data-lista]');

// quadro.addEventListener('click', async (evento) => {
//     let botaoLancaNotas = evento.target.className = 'lancaNotas'

// })

const render = async()=> {
    try {
        const fichaClientes = await listaGatinhos()
        console.log(fichaClientes)
        fichaClientes.forEach(elemento => {
            quadro.appendChild(criaNovaLinha(elemento.img, elemento.username, elemento.id))
        });
    }
    catch(erro){
        console.log(erro)
    }
}
render()