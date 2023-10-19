function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var generos = document.getElementById("generos").value;
    var fotoInput = document.getElementById("foto"); // Input do arquivo
    var apresentacao = document.getElementById("apresentacao").value;

    // Verificar se os campos Nome, Gêneros Literários e Apresentação estão preenchidos
    if (nome.trim() === "" || generos.trim() === "" || apresentacao.trim() === ""|| fotoInput.files.length === 0) {
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
    if (fotoInput.files.length > 0) {
        var extensoesValidas = ["jpg", "jpeg", "png", "gif"];
        var extensao = fotoInput.files[0].name.split('.').pop().toLowerCase();
        if (extensoesValidas.indexOf(extensao) === -1) {
            alert("Apenas arquivos de imagem (jpg, jpeg, png, gif) são permitidos.");
            return false; // Impede o envio do formulário
        }
    }

    // Se todas as validações passarem, permite o envio do formulário

    // Crie um novo elemento de card de membro
    var memberCard = document.createElement("div");
    memberCard.classList.add("member-card");

    // Preencha o card com os dados do usuário
    var fotoURL = URL.createObjectURL(fotoInput.files[0]);
    memberCard.innerHTML = `
        <img src="${fotoURL}" alt="Foto de ${nome}">
        <h2>${nome}</h2>
        <p>Gêneros Literários Preferidos: ${generos}</p>
        <div class="social-links">
            <a href="${facebook}" target="_blank">Facebook</a>
            <a href="${twitter}" target="_blank">Twitter</a>
            <a href="${instagram}" target="_blank">Instagram</a>
        </div>
        <p>Apresentação: ${apresentacao}</p>
    `

    // Adicione o novo card ao contêiner
    var membersContainer = document.getElementById("members-container");
    membersContainer.appendChild(memberCard);

    // Limpe os campos do formulário após adicionar o membro
    document.getElementById("nome").value = "";
    document.getElementById("generos").value = "";
    fotoInput.value = "";
    document.getElementById("twitter").value = "";
    document.getElementById("instagram").value = "";
    document.getElementById("facebook").value = "";
    document.getElementById("apresentacao").value = "";

    return false; // Impede o envio do formulário
}


