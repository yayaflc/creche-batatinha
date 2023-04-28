
const data = document.getElementById('data-hoje')

mes = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")
const hoje = new Date();

data.innerText = (mes[hoje.getMonth()] +" / "+ hoje.getFullYear())


