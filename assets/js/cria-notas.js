const listaGatinhos = () => {
    return fetch(`https://64503b16ba9f39c6ab760fc2.mockapi.io/api/v1/users`)
    .then(resposta => {
        if(resposta.ok){
            
            return resposta.json()
            
        }
        throw new Error('Não foi possível listar os clientes')
    })
}

const notasGato = document.querySelector('[data-notas]');

const render = async (gatoId)=> {
    try {
        const bancoDeDados = await listaGatinhos()

        // bancoDeDados.forEach(gatinho => {
        //     notasGato.appendChild(criaNotas(gatinho.img, gatinho.username))
        // })
        
        idx_lista= -1
        for(i = 0; i < bancoDeDados.length; i++){
            if(gatoId === bancoDeDados[i].id){
                idx_lista = i
            }
        }
        console.log(bancoDeDados[1].id)
        notasGato.appendChild(
            criaNotas(
                bancoDeDados[idx_lista].img,
                bancoDeDados[idx_lista].username,
                bancoDeDados[idx_lista].notas
            )
        )
        
    }
    catch(erro){
        console.log(erro)
    }
}
render('2')


const criaNotas = (img, username) => {

    //cria a data
    mes = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")
    const hoje = new Date();
    data = (mes[hoje.getMonth()] +" / "+ hoje.getFullYear());

    //insere conteudo e data
    const novoGatinho = document.createElement('main')
    let conteudo = `
    <div class="cabecalho">
    <button class="voltar"><a href="./listas.html"><img src="../assets/img/Botão voltar.svg"></a></button>
        <figure>
            <img src=${img} alt="Gatinho"><figcaption>${username}</figcaption>
        </figure>
        <p>${data}</p>
        
        </div>
        <div class="lancaNotas">
        <hr>
        <div class="notas">
            <div>
                <h3>Socialização</h3>
                <p class="txt">Brinca com os outros gatinhos?</p>
            </div> 
            <div>
                <button class="desativado5" id=0></button>
                <button class="desativado5" id=1></button>
                <button class="desativado5" id=2></button>
                <button class="desativado5" id=3></button>
                <button class="desativado5" id=4></button>
            </div>
        </div>
        <hr>
        <div class="notas">
            <div>
                <h3>Sonequinha</h3>
                <p class="txt">Tira bastante soninho?</p>
            </div>
            <div>
                <button class="desativado1" id=0></button>
                <button class="desativado1" id=1></button>
                <button class="desativado1" id=2></button>
                <button class="desativado1" id=3></button>
                <button class="desativado1" id=4></button>
            </div>   
        </div>
        <hr>
        <div class="notas">
            <div>
                <h3>Alimentação</h3>
                <p class="txt">Está comendo direitinho?</p>
            </div>
            <div>
                <button class="desativado2" id=0></button>
                <button class="desativado2" id=1></button>
                <button class="desativado2" id=2></button>
                <button class="desativado2" id=3></button>
                <button class="desativado2" id=4></button>
            </div>   
        </div>
        <hr>
        <div class="notas">
            <div>
                <h3>Brincadeiras</h3>
                <p class="txt">Participa das brincadeiras em grupo?</p>
            </div>
            <div>
                <button class="desativado3" id=0></button>
                <button class="desativado3" id=1></button>
                <button class="desativado3" id=2></button>
                <button class="desativado3" id=3></button>
                <button class="desativado3" id=4></button>
            </div>
        </div>
        <hr>
        <div class="notas">
            <div>
                <h3>Preguicinha</h3>
                <p class="txt">Está mais agitado ou mais quietinho?</p>
            </div>
            <div>
                <button class="desativado4" id=0></button>
                <button class="desativado4" id=1></button>
                <button class="desativado4" id=2></button>
                <button class="desativado4" id=3></button>
                <button class="desativado4" id=4></button>
            </div>   
        </div>
        <hr>
        <div class="notas">
            <div>
                <h3>Fotos</h3>
                <p class="txt">Nos deixa tirar fotos?</p>
            </div>
            <div>
                <button class="desativado5" id=0></button>
                <button class="desativado5" id=1></button>
                <button class="desativado5" id=2></button>
                <button class="desativado5" id=3></button>
                <button class="desativado5" id=4></button>
            </div>   
        </div>
        <hr>
        </div>
        <div class="btn">
        <button class="imprime" id="btn-pdf">Imprimir Boletim</button>
        <button class="salva" id="btn-salva">Salvar notas</button>
        </div>
        `
    novoGatinho.innerHTML = conteudo
    
    return novoGatinho
};



    // // console.log(notas)
    // const nota = 3;
    // for (i=0; i<5; i++){
    //     if (i<nota){
    //         conteudo += `<button class="ativo" id=${i}></button>`
    //     } else {
    //         conteudo += `<button class="desativado" id=${i}></button>`
    //     }
    // }
                
    // conteudo += `