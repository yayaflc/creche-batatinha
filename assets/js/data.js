const data = document.querySelector('#data-hoje p');

mes = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")
const hoje = new Date();

data.innerHTML = (mes[hoje.getMonth()] +" / "+ hoje.getFullYear());


