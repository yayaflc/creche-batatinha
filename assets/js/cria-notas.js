//ABRINDO REQUISIÇÃO DE ACESSO 

// requisição utilizando o Fetch API (link url do site mockapi.io) para acessar as informações dos gatos cadastrados

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

const renderNotasGato = async ()=> {
    try {     
        const urlParams = new URLSearchParams(window.location.search);
        const gatoId = urlParams.get('id');   
        const bancoDeDados = await listaGatinhos(gatoId)

        idx_lista= -1
        for(let i = 0; i < bancoDeDados.length; i++){
            if(gatoId === bancoDeDados[i].id){
                idx_lista = i
            }
        }
        // console.log(bancoDeDados[1].id)
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
renderNotasGato();

const criaNotas = (img, username) => {

    //cria a data
    mes = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")
    const hoje = new Date();
    data = (mes[hoje.getMonth()] +" / "+ hoje.getFullYear());

    //insere conteudo e data
    const novoGatinho = document.createElement('main')

    if(img ==='') {
        img = '../assets/img/gatinho.png';
      }

    let conteudo = `
    <div class="cabecalho">
        <button class="voltar"><a href="./listas.html"><img src="../assets/img/Botão voltar.svg" id="btn-voltar"></a></button>
        <figure>
            <img src=${img} width="80" alt="Gatinho"><figcaption>${username}</figcaption>
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
                <button class="desativado" id=0></button>
                <button class="desativado" id=1></button>
                <button class="desativado" id=2></button>
                <button class="desativado" id=3></button>
                <button class="desativado" id=4></button>
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

function verificarHabilitarBotaoSalvamento() {
    const elementosAtivos = document.querySelectorAll('.ativo');
    const elementosAtivos1 = document.querySelectorAll('.ativo1');
    const elementosAtivos2 = document.querySelectorAll('.ativo2');
    const elementosAtivos3 = document.querySelectorAll('.ativo3');
    const elementosAtivos4 = document.querySelectorAll('.ativo4');
    const elementosAtivos5 = document.querySelectorAll('.ativo5');
    const botaoSalvamento = document.getElementById('btn-salva');
    
    if (elementosAtivos.length > 0 && 
        elementosAtivos1.length > 0 &&
        elementosAtivos2.length > 0 &&
        elementosAtivos3.length > 0 &&
        elementosAtivos4.length > 0 &&
        elementosAtivos5.length > 0 ) {
      botaoSalvamento.className = 'botao-salvar';
      return true
    } 
    return false
}
function verificaRequisitosSalvamento() {
    let posso_salvar = verificarHabilitarBotaoSalvamento()
    console.log("===>"+posso_salvar)
    if (!posso_salvar){
    alert("Preencha todos os campos para salvar")
    } else {
        alert("arquivo salvo")
    }
    return posso_salvar
}
 

function aplicarComportamento(evento, classeElementoDesativado, classeElementoAtivo) {
    let desativados = document.getElementsByClassName(classeElementoDesativado)
    let ativos = document.getElementsByClassName(classeElementoAtivo)

    if (evento.target.className===classeElementoDesativado || evento.target.className===classeElementoAtivo){
        const elementoClicado = evento.target;
        const idClicado = elementoClicado.id;
        
        lista = [].concat(Array.from(desativados), (Array.from(ativos)))
        for (i=0; i<lista.length; i++){
            lista[i].classList.remove(classeElementoAtivo);
            lista[i].classList.add(classeElementoDesativado);
            if (lista[i].id <= idClicado){
                lista[i].classList.remove(classeElementoDesativado);
                lista[i].classList.add(classeElementoAtivo);
            }
        }
    }
}

notasGato.addEventListener('click', (evento) => {
    evento.preventDefault()
   
        console.log("===> "+evento.target.id)

        if (evento.target.id === "btn-salva"){
            atendeRequisitos = verificaRequisitosSalvamento();
            if (atendeRequisitos) {
                // chamar metodo post
            }
        } else if (evento.target.id === "btn-voltar") {
            window.location.href="./listas.html"
        } else if (evento.target.id === "btn-pdf") {
            window.print();
        } else {        
            aplicarComportamento(evento, "desativado","ativo")
            aplicarComportamento(evento, "desativado1","ativo1")
            aplicarComportamento(evento, "desativado2","ativo2")
            aplicarComportamento(evento, "desativado3","ativo3")
            aplicarComportamento(evento, "desativado4","ativo4")
            aplicarComportamento(evento, "desativado5","ativo5")
            
            verificarHabilitarBotaoSalvamento();
        }
       
});







    