// requisição tipo POST(para fazer cadastros) utilizando o Fetch API (link url do site mockapi.io)
const cadastraGatinho = (img64str, username, tutor, id) => {
    return fetch(`https://64503b16ba9f39c6ab760fc2.mockapi.io/api/v1/users`, {
        method: 'POST',
        headers: { //quais cabeçahos serão necessário para efetuar a requisição
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ //conteudo deve retornar em formato string
            img: img64str, //conteudos da requisição
            username: username,
            tutor: tutor,
            id: id
        })
    })
    .then(resposta => { 
        if(resposta.ok) {
            console.log(resposta)
            return resposta.body //se a requisição der certo a resposta vai ser adicionada ao corpo do arquivo
        }
        throw new Error('Não foi possível cadastrar um novo gatinho')
    })
} 


// ADICIONANDO IMAGEM NO FORMULARIO HTML

let img64str="" //inicialização da string base64 vazia

const formulario = document.querySelector('[data-form]');

const imgBtn = document.querySelector('[data-foto]');

imgBtn.addEventListener('change', (evento) => { //adiciona um evento de mudança no botão imgBtn(que está no HTML como data-foto)

    let imgFiles = evento.target.files;//quando a foto é escolhida imgfiles acessa o arquivo da imagem
    let imgCarregada = imgFiles[0] //essa imagem está na posição 0 da array
    let arquivoLer = new FileReader() //FileReader permite ler armazenados no computador do usuário
    
    // garante que a imagem carregada seja menor que 10000
    if (imgCarregada.size>10000){ 
        alert("Arquivo muito grande")
        return
    }

    arquivoLer.onload = function(imgCarregadaEvento){
        // convertendo arquivo para base64
        img64str = imgCarregadaEvento.target.result;

        // atualizar a foto na página de cadastro
        document.getElementsByClassName('foto')[0].style.backgroundImage="url("+img64str+")"                
    }

    // Pede para carregar a imagem (chama o evento onload e mostrar no HTML)
    arquivoLer.readAsDataURL(imgCarregada);
}
)


const informacoes = document.getElementsByClassName('inform');
for(i=0; i<informacoes.length; i++){
    informacoes[i].addEventListener('change', async(evento)=> {
        const username = document.querySelector('[data-username]').value
        const tutor = document.querySelector('[data-tutor]').value
    
        if (username.length > 0 && tutor.length > 0){
            const botaoSalvamento = document.getElementById('btn-salva');
            botaoSalvamento.className = 'botao-salvar';

    }
})}
    


//ENVIANDO CONTEÚDO ADICIONADO AO FORMULÁRIO PARA A API E REDIRECIONANDO AS INFORMAÇÕES PARA A PAGINA LISTA
formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault()
    
    const img = evento.target.querySelector('[data-foto]').files;
    const username = evento.target.querySelector('[data-username]').value
    const tutor = evento.target.querySelector('[data-tutor]').value
    
    // garante que o úsuário tenha preenchido todos os campos
    
    if (username.length > 0 && tutor.length > 0){
        await cadastraGatinho(img64str, username, tutor)
        window.location.href = './listas.html'//mostra as informações na tela na url listas
    } else {
        alert("Preencha todos os dados")
    }

    })
    