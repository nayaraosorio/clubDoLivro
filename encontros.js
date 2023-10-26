// Dados das lives
const liveData = [
    {
        tema: "Stephen King e suas obras de Terror.",
        inscritos: "104 estudantes inscritos",
        duracao: "1h20min de live",
        palestrante: "Com Carrie Strange"
    },
    {
        tema: "Guerra dos Tronos e a Cultura POP.",
        inscritos: "85 estudantes inscritos",
        duracao: "1h02min de live",
        palestrante: "Com Denéria Geada Nascimento"
    },
    {
        tema: "Dan Brown e o Código Da Vinci",
        inscritos: "178 estudantes inscritos",
        duracao: "1h45min de live",
        palestrante: "Com Robert Langdon"
    },
    {
        tema: "O Hobbit e a Terra-Média",
        inscritos: "234 estudantes inscritos",
        duracao: "1h32min de live",
        palestrante: "Com Nildo Bolseiro"
    }
];

// Função para criar elementos da lista de encontros
function createLiveElements(data) {
    const li = document.createElement("li");
    li.innerHTML = `
        <h3>Tema: ${data.tema}</h3>
        <p>${data.inscritos}</p>
        <p>${data.duracao}</p>
        <p>${data.palestrante}</p>
    `;
    return li;
}

// Populando a lista de encontros
document.addEventListener("DOMContentLoaded", function () {
    const liveList = document.getElementById("live-list");
    liveData.forEach((live) => {
        const liveElement = createLiveElements(live);
        liveList.appendChild(liveElement);
    });
});



