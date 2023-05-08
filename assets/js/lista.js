const listaDeGatos = [
    {
        nome: "Buzz",
        foto: "../assets/img/gatos/gato1.png"
    },
    {
        nome: "Dona",
        foto: "../assets/img/gatos/gato2.png"
    },
    {
        nome: "Floquinho",
        foto: "../assets/img/gatos/gato3.png"
    },
    {
        nome: "Rafa",
        foto: "../assets/img/gatos/gato4.png"
    }
];

const itemList = document.getElementById("item-list")

listaDeGatos.forEach(gato => {
        // Cria os elementos para o item
        const li = document.createElement("li");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const button = document.createElement("button");
      
        // Define os atributos e conteúdo dos elementos
        img.src = gato.foto;
        h2.textContent = gato.nome;
        button.textContent = "Lançar notas";
        button.addEventListener("click", () => {
        window.location.href = `../index.html?gato=${gato.nome}`;
        });
      
        // Adiciona os elementos à li e a li à lista
        li.classList.add("item");
        li.appendChild(img);
        li.appendChild(h2);
        li.appendChild(button);
        itemList.appendChild(li);
});
