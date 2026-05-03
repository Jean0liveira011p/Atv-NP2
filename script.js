document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formContato");
    const lista = document.getElementById("listaContatos");
    const mensagem = document.getElementById("mensagem");
    const btnTema = document.getElementById("btnTema");
    const msgAjax = document.getElementById("mensagemAjax");

    // AJAX
    fetch("dados.json")
        .then(res => res.json())
        .then(dados => {
            msgAjax.textContent = dados.mensagem;
        });

    // Tema
    btnTema.addEventListener("click", function () {
        document.body.classList.toggle("tema-escuro");
    });

    // Formulário
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;

        if (nome === "" || email === "" || telefone === "") {
            mensagem.textContent = "Preencha tudo!";
            mensagem.style.color = "red";
            return;
        }

        const item = document.createElement("li");
        item.className = "list-group-item";
        item.textContent = nome + " - " + email + " - " + telefone;

        lista.appendChild(item);

        mensagem.textContent = "Cadastrado!";
        mensagem.style.color = "green";

        form.reset();
    });

});