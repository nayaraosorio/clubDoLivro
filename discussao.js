document.addEventListener("DOMContentLoaded", function () {

    // Função para adicionar um comentário
    function adicionarComentario(nome, livro, texto) {
        const comentariosDiv = document.getElementById('comentarios');
    
        const novoComentario = document.createElement('div');
        novoComentario.classList.add('comentario');
    
        const autorComentario = document.createElement('p');
        autorComentario.classList.add('autor');
        autorComentario.textContent = `Usuário: ${nome}`;
    
        const livroComentario = document.createElement('p');
        livroComentario.classList.add('livro');
        livroComentario.textContent = `Livro: ${livro}`;
    
        const textoComentario = document.createElement('p');
        textoComentario.classList.add('texto');
        textoComentario.textContent = `Comentário: ${texto}`;
    
        const curtirBtn = document.createElement('ion-icon');
        curtirBtn.classList.add('curtir-btn');
        curtirBtn.setAttribute('name', 'heart-circle-outline');
        curtirBtn.addEventListener('click', function () {
            curtirComentario(novoComentario);
        });
        
    
        const contadorCurtidas = document.createElement('span');
        contadorCurtidas.classList.add('contador-curtidas');
        contadorCurtidas.textContent = '0';
    
        novoComentario.appendChild(autorComentario);
        novoComentario.appendChild(livroComentario);
        novoComentario.appendChild(textoComentario);
        novoComentario.appendChild(curtirBtn);
        novoComentario.appendChild(contadorCurtidas);
    
        comentariosDiv.appendChild(novoComentario);
    }
    function curtirComentario(comentario) {
        const contadorCurtidas = comentario.querySelector('.contador-curtidas');
        let curtidas = parseInt(contadorCurtidas.textContent);
        curtidas++;
        contadorCurtidas.textContent = curtidas;
    }
    

    // Função para lidar com o envio do formulário
    function enviarComentario(event) {
        event.preventDefault();

        const nomeInput = document.getElementById('nome');
        const livroInput = document.getElementById('livro');
        const comentarioInput = document.getElementById('comentario');

        const nome = nomeInput.value;
        const livro = livroInput.value;
        const texto = comentarioInput.value;

        // Validação robusta do campo "Nome"
        if (!nome || !contemApenasLetras(nome)) {
            alert('Por favor, insira um nome válido (apenas letras e sem espaços em branco).');
            nomeInput.focus();
            return;
        }

        if (!livro || !texto) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        adicionarComentario(nome, livro, texto);
        nomeInput.value = '';
        comentarioInput.value = '';
        // Atualize as opções do formulário de livros após adicionar o comentário
        atualizarOpcoesLivros();
    }


    // Função para atualizar as opções do formulário de livros
    function atualizarOpcoesLivros() {
        const selectLivro = document.getElementById("livro");

        // Limpa todas as opções existentes
        selectLivro.innerHTML = "";

        // Obtém os títulos dos livros dos destaques do mês
        const livrosDestaque = document.querySelectorAll('.card h3');

        // Crie e adicione as novas opções ao select
        livrosDestaque.forEach((livro) => {
            const tituloLivro = livro.textContent;
            const option = document.createElement("option");
            option.value = tituloLivro;
            option.textContent = tituloLivro;
            selectLivro.appendChild(option);
        });
    }

    // Função para definir os detalhes dos livros pelo administrador
    function definirDetalhesLivros() {
        // Livro 1
        const livro1 = document.getElementById('livro1');
        livro1.querySelector('h3').textContent = 'Agir e Pensar Como Um Gato';

        const sinopseLivro1 = livro1.querySelector('.sinopse');
        sinopseLivro1.textContent = 'Ao observar Ziggy, seu gato, Stéphane Garnier começou a perceber que muitas coisas que fazia sem ter vontade, muita gente com quem convivia e nada tinha a lhe acrescentar, muito estresse e energias negativas que trazia para casa depois de um dia de trabalho só serviam para uma coisa: fazer com que se sentisse mal, pra baixo, infeliz.'; // Defina a sinopse resumida
        const sinopseCompletaLivro1 = 'Ao observar Ziggy, seu gato, Stéphane Garnier começou a perceber que muitas coisas que fazia sem ter vontade, muita gente com quem convivia e nada tinha a lhe acrescentar, muito estresse e energias negativas que trazia para casa depois de um dia de trabalho só serviam para uma coisa: fazer com que se sentisse mal, pra baixo, infeliz...Foi num desses dias em que Ziggy caminhava pela sua mesa de trabalho, deitava-se sobre o teclado do computador e não parava de mordiscar a tampa da caneta, que Stéphane entendeu que ele estava querendo lhe transmitir uma mensagem: “Ei! Que tal desligar um pouco?”Desligar... Talvez fosse esse o segredo que ele desejava contar já havia algum tempo: largar de mão, entregar-se ao essencial, pensar no próprio bem-estar, ou seja... Viver como um gato!Stéphane descobriu que os gatos vivem muito melhor do que nós! São livres, honestos, carismáticos, nobres, independentes... e temos MUITO a aprender com eles.'; // Defina a sinopse completa

        // Limitar a sinopse inicial a 200 caracteres
         sinopseLivro1.textContent = sinopseCompletaLivro1.substring(0, 200) + '...';

        // Adicione o botão "Ver Mais" para o livro 1
        const buttonLivro1 = document.createElement('button');
        buttonLivro1.textContent = 'Ver Mais';
        sinopseLivro1.parentNode.appendChild(buttonLivro1);

        // Atribua um ID ao botão para facilitar a identificação
        buttonLivro1.id = 'buttonLivro1';

        // Defina um evento de clique para o botão "Ver Mais" do livro 1
        buttonLivro1.addEventListener('click', function () {
            toggleSinopse(sinopseLivro1, sinopseCompletaLivro1, buttonLivro1);
        });

        livro1.querySelector('img').src = 'imagens/agir-pensar-gato.jpg';

        // Livro 2
        const livro2 = document.getElementById('livro2');
        livro2.querySelector('h3').textContent = 'Diário de Uma Ansiosa ou Como Parei de me Sabotar';

        const sinopseLivro2 = livro2.querySelector('.sinopse');
        sinopseLivro2.textContent = 'A vida adulta não é fácil. E quem nunca fuxicou as redes sociais de amigos bem-sucedidos, só para se comparar, e acabou se sentindo pior ainda, que atire a primeira pedra.';
        const sinopseCompletaLivro2 = 'A vida adulta não é fácil. Quem nunca deu uma olhada nas redes sociais de amigos bem-sucedidos, só para se comparar, e acabou se sentindo ainda pior? Neste livro, a autora compartilha suas próprias histórias, desde as vergonhosas até as mais sérias, como a luta contra a depressão e o transtorno obsessivo-compulsivo. Com leveza e bom humor, ela extrai lições valiosas dessas experiências. Este livro está repleto de conselhos amigáveis sobre como cuidar de si mesmo, como procurar ajuda, não importa quais sejam seus problemas, e como abraçar aquilo que te faz feliz, seja uma banda que você adora ou uma maratona da Netflix. Beth Evans, uma contadora de histórias supercriativa, utiliza seus desenhos para complementar suas palavras, adicionando um toque único de humor. Com mais de 217 mil seguidores no Instagram, ela faz as pessoas rirem e se sentirem acolhidas ao encontrar humor nas situações cotidianas. "Diário de uma ansiosa ou como parei de me sabotar" é como um abraço de um amigo nos dias difíceis, e, como um bom amigo, está aqui para te dizer: "Você consegue!"';
          // Limitar a sinopse inicial a 200 caracteres
        sinopseLivro2.textContent = sinopseCompletaLivro1.substring(0, 200) + '...';
        const buttonLivro2 = document.createElement('button');
        buttonLivro2.textContent = 'Ver Mais';
        sinopseLivro2.parentNode.appendChild(buttonLivro2);
        buttonLivro2.id = 'buttonLivro2';
        buttonLivro2.addEventListener('click', function () {
            toggleSinopse(sinopseLivro2, sinopseCompletaLivro2, buttonLivro2);
        });

        livro2.querySelector('img').src = 'imagens/diario-ansiosa-sabotar.jpg';

        // Livro 3
        const livro3 = document.getElementById('livro3');
        livro3.querySelector('h3').textContent = 'O Sol é para Todos';

        const sinopseLivro3 = livro3.querySelector('.sinopse');
        sinopseLivro3.textContent = 'Nesta emocionante história ambientada no Sul dos Estados Unidos da década de 1930, região envenenada pela violência do preconceito racial, vemos um mundo de grande beleza e ferozes desigualdades através dos olhos de uma menina de inteligência viva e questionadora, enquanto seu pai, um advogado local, arrisca tudo para defender um homem negro injustamente acusado de cometer um terrível crime.';
        const sinopseCompletaLivro3 = `Nesta envolvente história ambientada no Sul dos Estados Unidos na década de 1930, uma região envenenada pelo preconceito racial, somos apresentados a um mundo de grande beleza e profundas desigualdades pelos olhos de Scout, uma menina inteligente e questionadora. Seu pai, Atticus Finch, um advogado local, arrisca tudo para defender um homem negro injustamente acusado de cometer um terrível crime. Esta é uma narrativa que aborda temas cruciais de raça e classe, inocência e justiça, hipocrisia e heroísmo, tradição e transformação. "O Sol é para Todos" permanece tão relevante hoje quanto em sua primeira edição em 1960, durante os turbulentos anos da luta pelos direitos civis dos negros nos Estados Unidos.`;
          // Limitar a sinopse inicial a 200 caracteres
        sinopseLivro3.textContent = sinopseCompletaLivro1.substring(0, 200) + '...';
        const buttonLivro3 = document.createElement('button');
        buttonLivro3.textContent = 'Ver Mais';
        sinopseLivro3.parentNode.appendChild(buttonLivro3);
        buttonLivro3.id = 'buttonLivro3';
        buttonLivro3.addEventListener('click', function () {
            toggleSinopse(sinopseLivro3, sinopseCompletaLivro3, buttonLivro3);
        });

        livro3.querySelector('img').src = 'imagens/sol-para-todos.jpg';
    }

    // Função para alternar entre sinopse completa e resumida
    function toggleSinopse(sinopse, sinopseCompleta, button) {
        if (!sinopse.getAttribute('data-state') || sinopse.getAttribute('data-state') === 'resumida') {
            sinopse.textContent = sinopseCompleta;
            sinopse.setAttribute('data-state', 'completa');
            button.textContent = 'Ver Menos';
        } else {
            sinopse.textContent = sinopse.textContent.substring(0, 200) + '...'; // Mostrar apenas os primeiros 150 caracteres da sinopse
            sinopse.setAttribute('data-state', 'resumida');
            button.textContent = 'Ver Mais';
        }
    }

    // Função para verificar se uma string contém apenas letras e espaços em branco
    function contemApenasLetras(string) {
        return /^[a-zA-Z\s]+$/.test(string);
    }

    // Chame a função para definir os detalhes dos livros pelo administrador
    definirDetalhesLivros();

    // Chame a função para atualizar as opções do formulário de livros
    atualizarOpcoesLivros();

    // Adicione um evento de envio para o formulário
    document.getElementById('comentarios-form').addEventListener('submit', function (event) {
        event.preventDefault();
    
        const nome = document.getElementById('nome').value;
        const livro = document.getElementById('livro').value;
        const texto = document.getElementById('comentario').value;
    
        if (nome && livro && texto) {
            adicionarComentario(nome, livro, texto);
            document.getElementById('nome').value = '';
            document.getElementById('comentario').value = '';
            // Atualize as opções do formulário de livros após adicionar o comentário
            atualizarOpcoesLivros();
        }
    });
    
});
