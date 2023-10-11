// membrosvalidacao.js

function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var generos = document.getElementById("generos").value;
    var foto = document.getElementById("foto").value;
    var apresentacao = document.getElementById("apresentacao").value;

    // Verificar se os campos Nome, Gêneros Literários e Apresentação estão preenchidos
    if (nome.trim() === "" || generos.trim() === "" || apresentacao.trim() === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false; // Impede o envio do formulário
    }

    // Verificar se o campo Nome contém apenas texto (letras e espaços)
    var regexTexto = /^[a-zA-Z\s]*$/;
    if (!regexTexto.test(nome)) {
        alert("O campo Nome deve conter apenas letras e espaços.");
        return false; // Impede o envio do formulário
    }

    // Verificar se o campo Gêneros Literários contém apenas texto (letras e espaços)
    if (!regexTexto.test(generos)) {
        alert("O campo Gêneros Literários Preferidos deve conter apenas letras e espaços.");
        return false; // Impede o envio do formulário
    }

    // Verificar se o campo Foto contém uma extensão de arquivo válida
    if (foto !== "") {
        var extensoesValidas = ["jpg", "jpeg", "png", "gif"];
        var extensao = foto.split('.').pop().toLowerCase();
        if (extensoesValidas.indexOf(extensao) === -1) {
            alert("Apenas arquivos de imagem (jpg, jpeg, png, gif) são permitidos.");
            return false; // Impede o envio do formulário
        }         
    }

    // Se todas as validações passarem, permite o envio do formulário
    return true;
} 
