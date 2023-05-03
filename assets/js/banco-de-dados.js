
// const cadastraGatinho = (img, username, tutor) => {
//     return fetch(`https://64503b16ba9f39c6ab760fc2.mockapi.io/api/v1/users`, {
//         method: 'POST',
//         headers: {
//             'Content-Type' : 'application/json'
//         },
//         body: JSON.stringify({
//             img: img,
//             username: username,
//             tutor: tutor
//         })
//     })
//     .then(resposta => {
//         if(resposta.ok) {
//             console.log(resposta)
//             return resposta.body
//         }
//         throw new Error('Não foi possível cadastrar um novo gatinho')
//     })
// }

// const listaGatinhos = () => {
//     return fetch(`https://64503b16ba9f39c6ab760fc2.mockapi.io/api/v1/users`)
//     .then(resposta => {
//         if(resposta.ok){
            
//             return resposta.json()
            
//         }
//         throw new Error('Não foi possível listar os clientes')
//     })
// }

// export const clienteService = {
//     cadastraGatinho,
    
// }