// Captura dos elementos
const formulario = document.getElementById("form-contato");
const status = document.getElementById("mensagem-status");

if (formulario) {
    // Aconetece somente se o usuário clicar em "enviar"
    formulario.addEventListener("submit", function (event) {

        event.preventDefault(); // Realização a validação dos dados sem recarregar a página
        status.classList.remove("erro", "sucesso"); // Começar validação 

        // Captura dos elemtos inseridos pelo usuário
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        // Verificações se tudo foi preenchido de maneira correta
        if (nome === "") {
            status.textContent = "Por favor, preencha o campo Nome.";
            status.classList.add("erro");
            return;
        }

        if (email === "") {
            status.textContent = "Por favor, preencha o campo E-mail.";
            status.classList.add("erro");
            return;
        }

        if (!email.includes("@")) {
            status.textContent = "Digite um e-mail válido.";
            status.classList.add("erro");
            return;
        }

        if (mensagem === "") {
            status.textContent = "Por favor, preencha o campo Mensagem.";
            status.classList.add("erro");
            return;
        }

        status.textContent = "Dados enviados com sucesso!"; // Mensagem de êxito
        status.classList.add("sucesso");

        formulario.reset(); // Limpar dados do formulário
    });

}

// Captura do botão de alterar tema
const botaoTema = document.getElementById("botao-tema");

// Só executar se realmente o botão existir na página
if (botaoTema) {

    //Verifica se existe tema salvo
    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "claro") {
        document.body.classList.add("tema-claro");
    }

    // Se a classe já existir, é removida, se não, é adicionada 
    botaoTema.addEventListener("click", function () {

        console.log("Clique detectado!");

        document.body.classList.toggle("tema-claro");

        // Salvar escolha do tema
        if (document.body.classList.contains("tema-claro")) {
            localStorage.setItem("tema", "claro");
        } else {
            localStorage.setItem("tema", "escuro");
        }

    });

}