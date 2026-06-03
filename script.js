JavaScript
// Objeto contendo os dados textuais que você enviou
const dadosBeneficios = {
    "info-recursos": {
        titulo: "Otimização de Recursos",
        texto: "Sistemas de irrigação inteligentes e sensores monitoram constantemente as condições do solo e das plantas. Isso ajusta a irrigação de acordo com a necessidade real das culturas, reduzindo o desperdício de água e melhorando a saúde das plantas através de análises de dados precisas."
    },
    "info-monitoramento": {
        titulo: "Monitoramento de Culturas",
        texto: "Drones equipados com câmeras dotadas de sensores RGB e multiespectrais capturam imagens processadas por IA. Permite detectar indícios de infestação por ervas daninhas, incidência de doenças e mapear linhas e falhas para replantio preciso."
    },
    "info-previsibilidade": {
        titulo: "Previsibilidade e Gestão de Riscos",
        texto: "A IA possibilita a análise de dados climáticos e históricos de produção para prever o rendimento das colheitas. Isso ajuda os agricultores a planejar atividades, otimizar a logística, minimizar perdas e se preparar para eventos climáticos extremos."
    },
    "info-automacao": {
        titulo: "Automação Inteligente",
        texto: "Tratores, pilotos automáticos e máquinas agrícolas autônomas realizam tarefas como plantio, colheita e pulverização com alta precisão através de sistemas de navegação por GPS e sensores avançados, reduzindo custos operacionais."
    }
};

// Seleção de Elementos do DOM
const botoes = document.querySelectorAll('.card-btn');
const painel = document.getElementById('painel-conteudo');
const painelTitulo = document.getElementById('panel-title');
const painelTexto = document.getElementById('panel-text');

// Lógica de manipulação de eventos
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const alvo = botao.getAttribute('data-target');
        const dados = dadosBeneficios[alvo];

        if (dados) {
            // Exibe o painel alterando o estado visual
            painel.classList.remove('hidden');
            painelTitulo.textContent = dados.titulo;
            painelTexto.textContent = dados.texto;
        }
    });
});



