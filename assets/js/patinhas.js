
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
  
  function aplicarComportamento(classeElemento, classeElementoAtivo) {
    const lista = document.querySelectorAll(`.${classeElemento}`);
  
    lista.forEach((item) => {
      item.addEventListener("click", (evento) => {
        const elementoClicado = evento.target;
        const idClicado = elementoClicado.id;
  
        lista.forEach((item) => {
          item.classList.remove(classeElementoAtivo);
          if (item.id <= idClicado) {
            item.classList.add(classeElementoAtivo);
          }
        });
  
        verificarHabilitarBotaoSalvamento();
      });
    });
  }
  
  aplicarComportamento('desativado', 'ativo');
  aplicarComportamento('desativado1','ativo1');
  aplicarComportamento('desativado2', 'ativo2');
  aplicarComportamento('desativado3', 'ativo3');
  aplicarComportamento('desativado4', 'ativo4');
  aplicarComportamento('desativado5', 'ativo5');
  
  const btnsalvar = document.getElementById("btn-salva");
  btnsalvar.addEventListener("click", () => {
    let posso_salvar = verificarHabilitarBotaoSalvamento()
    console.log("posso salvar? "+posso_salvar)
    if (!posso_salvar){
        alert("Preencha todos os campos")
    } else {
        alert("Notas salvas com sucesso!")
    }
  })

  const btnGerarPdf = document.getElementById("btn-pdf");

    btnGerarPdf.addEventListener("click", () => {
    
      window.print();
    });
  