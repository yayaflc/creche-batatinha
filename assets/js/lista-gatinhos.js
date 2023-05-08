//ABRINDO REQUISIÇÃO DE ACESSO 

// requisição utilizando o Fetch API (link url do site mockapi.io) para acessar as informações dos gatos cadastrados
const listaGatinhos = () => {
    return fetch('https://64503b16ba9f39c6ab760fc2.mockapi.io/api/v1/users')
      .then((resposta) => {
        if (resposta.ok) {
          return resposta.json();
        }
        throw new Error('Não foi possível listar os clientes');
      });
  };
  
  //MOSTRANDO COMO O CONTEÚDO DEVE SER ADICIONADO AO HTML

  const criaNovaLinha = (img, username, id) => {//informações que pegaremos lista de gatos cadastrados para adicionar ao HTML

    const linhaNovoGatinho = document.createElement('main'); //mostra que esse trecho de HTML deve ser criado próximo a TAG MAIN que é a tag pai dessa DIV

    const conteudo = `
      <div class="clientes">
          <figure>
              <img src=${img} alt="Gatinho"><figcaption>${username}</figcaption>
          </figure>
          <button type="button" class="lancaNotas">Lançar Notas</button>
      </div>
      `;

    linhaNovoGatinho.innerHTML = conteudo;//innerHTML adiciona o conteúdo ao HTML
    

    //Adiciona um evento de Click ao botaoLancaNotas, para que assim que ele seja clicado redirecione o usuário para a página de lançamento de notas do respectivo gato
    const botaoLancaNotas = linhaNovoGatinho.querySelector('.lancaNotas');
    botaoLancaNotas.addEventListener('click', () => {
      window.location.href = `./lancamento-de-notas.html?id=${id}`; //o id captado no banco de dados e agora adicionado a URL do botão nos permite fazer essa conexão
    });
  
    return linhaNovoGatinho;
  };
  

  //PEGANDO OS DADOS DA API E RENDERIZANDO NA TELA

  const quadro = document.querySelector('[data-lista]');
  
  const render = async () => {//a função assíncrona render irá tentar
    try {
      const fichaClientes = await listaGatinhos(); //pegar dados da MOCKAPI.IO
      
      fichaClientes.forEach((elemento) => {
        quadro.appendChild(criaNovaLinha(elemento.img, elemento.username, elemento.id));//irá criar uma nova linha da Tag filha mais próxima de quadro (que é o data atributo que adicionamos ao HTML) adicionar as informações que ele pegou na API
      });
    } catch (erro) {//caso dê errado ele irá pegar o erro
      console.log(erro);
    }
  };
  
  render();