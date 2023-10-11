    let openShopping = document.querySelector('.shopping');
    let closeShopping = document.querySelector('.closeShopping');
    let list = document.querySelector('.list');
    let listCard = document.querySelector('.listCard');
    let body = document.querySelector('body');
    let total = document.querySelector('.total');
    let quantity = document.querySelector('.quantity');

    openShopping.addEventListener('click', ()=>{
        body.classList.add('active');
    })
    closeShopping.addEventListener('click', ()=>{
        body.classList.remove('active');
    })

    let products = [
        {
            id: 1,
            name: 'A Hipótese Do Amor',
            imagens: 'A Hipótese Do Amor.webp',
            descricao: 'Quando Um Namoro De Mentira Entre Cientistas Encontra A Irresistível.',
            price: 20
        },
        {
            id: 2,
            name: 'É Assim Que Acaba',
            imagens: 'WhatsApp Image 2023-08-16 at 22.42.34 (2).jpeg',
            descricao: 'Sinopse: É Assim Que Acaba É O Romance Mais Pessoal Da Carreira De Colleen Hoover.',
            price: 20
        },
        {
            id: 2,
            name: 'O Lado Feio Do Amor',
            imagens: 'O Lado Feio Do Amor.webp',
            descricao: 'Tate Prometeu Não Se Apaixonar. Mas Vai Descobrir Que Nenhuma Regra.',
            price: 25
        },
        {
            id: 3,
            name: 'Uma Segunda Chance',
            imagens: 'Uma Segunda Chance.webp',
            descricao: 'Kenna Rowan, na luta para recuperar os pedaços estilhaçados de sua antiga.',
            price: 20
        },
        {
            id:4 ,
            name: 'Aconteceu Naquele Verão',
            imagens: 'Aconteceu Naquele Verão.webp',
            descricao: 'Autora best-seller Tessa Bailey traz deliciosa comédia.',
            price: 35
        },
        {
            id: 5,
            name: 'A Paciente Silenciosa',
            imagens: 'A Paciente Silenciosa_suspence.webp',
            descricao: 'Após cometer o assassinado de seu marido, uma mulher se recusa a falar qualquer coisa.',
            price: 49
        },
        {
            id:6,
            name: 'Nunca Saia Sozinho',
            imagens: 'Nunca Saia Sozinho_suspence.webp',
            descricao: 'Se aceitar o convite, não ignore o aviso, dentro dos muros, de uma escola de eletie.',
            price: 37
        },
        {
            id:7 ,
            name: 'Morte No Internato',
            imagens: 'Morte No Internato_suspence.webp',
            descricao: 'Obra Inédita da Lucinda Riley, Morte No Internato. É Um Romance Policial.',
            price: 25
        },
        {
            id: 8,
            name: 'As Outras Pessoas',
            imagens: 'As Outras Pessoas_suspence.webp',
            descricao: 'Novo Livro Da Autora Que Já Vendeu 220.000 Exemplares No BrasilGabe.',
            price: 39
        },
        {
            id: 9,
            name: 'Segredos De Família',
            imagens: 'Segredos De Família_suspence.webp',
            descricao: 'De Fora, Os Delaney Parecem Uma Família Perfeita. Os Pais, Stan E Joy.',
            price: 20
        },
        {
            id: 10,
            name: 'A Guerra Da Papoula',
            imagens: 'A Guerra Da Papoula.webp',
            descricao: 'Considerada Uma Das Melhores Fantasias De Todos Os Tempos.',
            price: 32
        },
        {
            id: 11,
            name: 'Guerra Que Salvou A Minha Vida',
            imagens: 'Guerra Que Salvou A Minha Vida.webp',
            descricao: 'Ada tem dez anos, a menina nunca saiu de casa, para...',
            price: 69
        },
        {
            id: 12,
            name: 'Guerra Particular De Lênin',
            imagens: 'Guerra Particular De Lênin.webp',
            descricao: 'Lesley Chamberlain Conta a história De Intelectuais...',
            price: 25
        },
        {
            id: 13,
            name: 'Primera Guerra Mundial',
            imagens: 'Primera Guerra Mundial.webp',
            descricao: 'Impresionantes historias que entrelazan los principales frentes...',
            price: 50
        },
        {
            id: 14,
            name: 'O Diário De Anne Frank',
            imagens: 'O Diário De Anne Frank.webp',
            descricao: 'Ed. de bolso do emocionante relato que se tornou um dos livros mais lidos do mundo.',
            price: 39
        },
        {
            id: 15,
            name: 'Cem Anos De Solidão',
            imagens: 'Cem Anos De Solidão_classico.webp',
            descricao: 'Neste clássico Conheça as fabulosas aventuras dos Buendía-Iguarán.',
            price: 29
        },
        {
            id: 16,
            name: 'Um Defeito De Cor',
            imagens: 'Um Defeito De Cor _classico.webp',
            descricao: '"Fascinante História De Uma Africana Idosa, cega e à beira da morte',
            price: 45
        },
        {
            id: 17,
            name: 'O Sol É Para Todos',
            imagens: 'O Sol É Para Todos_classico.webp',
            descricao: 'Um dos maiores clássicos da literatura mundial, ganhou o Prêmio Pulitzer.',
            price: 30
        },
        {
            id: 18,
            name: 'O Jardim Secreto',
            imagens: 'O Jardim Secreto_classico.webp',
            descricao: 'Uma história encantadora de transformação e empatia',
            price: 28
        },
        {
            id: 19,
            name: 'Ulisses',
            imagens: 'Ulisses_classico.webp',
            descricao: 'Ulisses conta também com a célebre e pioneira tradução de Antonio Houaiss.',
            price: 29
        },
        {
            id: 20,
            name: 'Historia Das Mulheres No Brasil',
            imagens: 'Historia Das Mulheres No Brasil_femi..webp',
            descricao: 'Conta A Trajetória Das Mulheres, do Brasil colonial. ',
            price: 39
        },
        {
            id: 21,
            name: 'Contra Os Filhos',
            imagens: 'Contra Os Filhos_femin..webp',
            descricao: 'Cáustico e crítico, este ensaio debate os atuais modelos de maternidade e família.',
            price: 39
        },
        {
            id: 22,
            name: 'Mulheres Normais',
            imagens: 'Mulheres Normais_femin..webp',
            descricao: 'Nós, Mulheres Normais, Estamos Todas Trabalhando Por Um Lugar No Sol',
            price: 29
        },
        {
            id: 23,
            name: 'Restos & Rastros',
            imagens: 'Restos & Rastros_femin..webp',
            descricao: 'Este delicado livro Restos & rastros é uma primorosa antologia.',
            price: 20
        },
        {
            id: 24,
            name: 'Mulheres Que Revolucionaram O Brasil',
            imagens: 'Mulheres Que Revolucionaram O Brasil.webp',
            descricao: 'Dandara foi uma guerreira.',
            price: 40
        },
        {
            id: 25,
            name: 'Uma Palavra Amiga',
            imagens: 'uma palavra amiga.webp',
            descricao: 'Essa obra fala da fé na palavra de Deus em momentos de tribulações.',
            price: 45
        },
        {
            id: 26,
            name: 'O Milagre Da Manhã',
            imagens: 'O Milagre Da Manhã _auto.webp',
            descricao: 'O segredo para transformar a sua vida antes das 8 horas.',
            price: 22
        },
        {
            id: 27,
            name: 'Talvez Você Deva Conversar com Alguém',
            imagens: 'Talvez Você Deva Conversar_auto.webp',
            descricao: 'De modo geral, buscamos a ajuda.',
            price: 50
        },
        {
            id: 28,
            name: 'A Coragem De Ser Imperfeito',
            imagens: 'A Coragem De Ser Imperfeito_auto.webp',
            descricao: 'O Desfecho Da Inspiradora Saga Do Dr. Marco Polo.',
            price: 40
        },
        {
            id: 29,
            name: 'O Poder Do Agora',
            imagens: 'O Poder Do Agora_auto.webp',
            descricao: 'Um dos maiores fenômenos da literatura mundial.',
            price: 38
        },
        {
            id: 30,
            name: 'Queime Depois De Escrever',
            imagens: 'Queime Depois De Escrever.webp',
            descricao: 'Primeiro lugar na lista da nielsen americana. ',
            price: 10
        },
        {
            id: 31,
            name: 'Homens São De Marte Mulheres São De Vênus',
            imagens: 'Homens São De Marte.webp',
            descricao: 'O livro de relacionamentos mais famoso',
            price: 10
        },
        {
            id: 32,
            name: 'A Morte É Um Dia Que Vale A Pena Viver',
            imagens: 'A Morte É Um Dia.webp',
            descricao: 'Um livro que propõe um novo olhar para A vida.',
            price: 10
        },
        {
            id: 33,
            name: 'A Arte Da Sedução',
            imagens: 'A Arte Da Sedução.webp',
            descricao: 'Quando nos apaixonamos, caímos numa espécie de encantamento',
            price: 10
        },
        {
            id: 34,
            name: 'Bom Dia, Espirito Santo',
            imagens: 'Livro Bom Dia.webp',
            descricao: 'Transformação de sua vida por meio dos ensinamentos de Deus',
            price: 10
        },
        {
            id: 35,
            name: 'Agir Invisivel De Deus',
            imagens: 'Agir Invisivel De Deus,.webp',
            descricao: 'Vivemos dias em que a fé cristã tem crescido e se espalhado grandemente.',
            price: 10
        },
        {
            id: 36,
            name: 'Uma Vida Com Propósitos',
            imagens: 'Uma Vida Com Propósitos.webp',
            descricao: 'Uma vida com propósitos é sem dúvida um clássico..',
            price: 10
        },
        {
            id: 37,
            name: 'O Inocente',
            imagens: 'Inocente.webp',
            descricao: 'Aos 20 anos, Matt Hunter vive uma noite de horror.',
            price: 10
        },
        {
            id: 38,
            name: 'Autismo: Uma Leitura Espiritual',
            imagens: 'Autismo.webp',
            descricao: 'O mundo fechado do autismo continua sendo um enigma.',
            price: 10
        },
        {
            id: 39,
            name: 'Biomilda Diário De Viagem',
            imagens: 'Biomilda.webp',
            descricao: 'Um país, no entanto, tinha um lugar especial.',
            price: 10
        }
        
    ];

    let listCards  = [];
    function initApp(){
        products.forEach((value, key) =>{
            let newDiv = document.createElement('div');
            newDiv.classList.add('item');
            newDiv.innerHTML = `
                <img src="imagens/${value.imagens}">
                <div class="title">${value.name}</div>
                <div class="descricao">${value.descricao}</div>
                <div class="price">${value.price.toLocaleString()}</div>
                <button onclick="addToCard(${key})">Comprar</button>`;
                
            list.appendChild(newDiv);
        })
    }
    initApp();
    function addToCard(key){
        if(listCards[key] == null){
            // copy product form list to list card
            listCards[key] = JSON.parse(JSON.stringify(products[key]));
            listCards[key].quantity = 1;
        }
        reloadCard();
    }
    function reloadCard(){
        listCard.innerHTML = '';
        let count = 0;
        let totalPrice = 0;
        listCards.forEach((value, key)=>{
            totalPrice = totalPrice + value.price;
            count = count + value.quantity;
            if(value != null){
                let newDiv = document.createElement('li');
                newDiv.innerHTML = `
                    <div><img src="imagens/${value.imagens}"/></div>
                    <div>${value.name}</div>
                    <div>${value.price.toLocaleString()}</div>
                    <div>
                        <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                        <div class="count">${value.quantity}</div>
                        <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                    </div>`;
                    listCard.appendChild(newDiv);
            }
        })
        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    }
    function changeQuantity(key, quantity){
        if(quantity == 0){
            delete listCards[key];
        }else{
            listCards[key].quantity = quantity;
            listCards[key].price = quantity * products[key].price;
        }
        reloadCard();
    }

