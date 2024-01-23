
function carregarDados() {
    fetch('../../dados/tabela3.csv')
        .then(response => response.text())
        .then(data => processarDados(data));
}

function processarDados(Datatabela3) {
    dadostabela3 = Datatabela3.replace(/(\d+),(\d+%)/g, '$1.$2');
    const linhastabela = dadostabela3.split('\n');
    const cabecalho = linhastabela[1].split(',');
    const dadostabela = {};

    for (let i = 2; i < cabecalho.length; i++) {
        const status = cabecalho[i] ? cabecalho[i].trim() : '';

        const valorString = linhastabela[3].split(',')[i];
        const porcentagem = valorString ? (valorString.replace('%', '').replace('"', '').replace('"', '')) : 0;

      
        dadostabela[status] = porcentagem;
    }

    if (Object.keys(dadostabela).length > 0){
        criarGrafico3(dadostabela);
    }
}



function criarGrafico3(data) {

    var containerGrafico3 = document.createElement('div');
    containerGrafico3.classList.add('containerGrafico3');
    document.getElementById('divGrafico3').appendChild(containerGrafico3);

    var nomeDivGrafico3 = document.createElement('p');
    nomeDivGrafico3.classList.add('nomeDivGrafico3');
    nomeDivGrafico3.textContent = 'Situação das Atividades';
    containerGrafico3.appendChild(nomeDivGrafico3);

    var divContainerGrafico3 = document.createElement('div');
    divContainerGrafico3.classList.add('divContainerGrafico3');

    var canvasGrafico3 = document.createElement('canvas');
    canvasGrafico3.classList.add('Grafico3');
    divContainerGrafico3.appendChild(canvasGrafico3);

    var divDescricaoGrafico3 = document.createElement('p');
    divDescricaoGrafico3.classList.add('divDescricaoGrafico3');
    divDescricaoGrafico3.textContent = '29% das atividades foram ENTREGUES (NO PRAZO)';
    divContainerGrafico3.appendChild(divDescricaoGrafico3);
    containerGrafico3.appendChild(divContainerGrafico3);

    var contexto = canvasGrafico3.getContext('2d');
    var meuGrafico3 = new Chart(contexto, {
        type: 'pie',
        data: {
            //labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: [
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(255, 205, 86, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                ],
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'grafico 3',
            },
        },
    });
   

}



carregarDados();

