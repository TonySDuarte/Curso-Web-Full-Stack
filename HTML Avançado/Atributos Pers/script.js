let lista = document.getElementById("lista");

lista.dataset.n = 4;

let id = lista.dataset.id;
console.log(id);

let num = parseInt(lista.dataset.n);

let conteudo = ""

for (let i = 0; i < num; i++) {
    conteudo += "<li>" + i + "</li>";
}

lista.innerHTML = conteudo;