const cadastraGatinho = (img, username, tutor, id) => {
    return fetch(`https://64503b16ba9f39c6ab760fc2.mockapi.io/api/v1/users`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            img: img,
            username: username,
            tutor: tutor,
            id: id
        })
    })
    .then(resposta => {
        if(resposta.ok) {
            console.log(resposta)
            return resposta.body
        }
        throw new Error('Não foi possível cadastrar um novo gatinho')
    })
}; 

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault()
    try {
        const img = evento.target.querySelector('[data-foto]').value
        const username = evento.target.querySelector('[data-username]').value
        const tutor = evento.target.querySelector('[data-tutor]').value

        await cadastraGatinho(img, username, tutor)
        window.location.href = './listas.html'
    }
    catch(erro) {
        console.log(erro)
    }
}) 

