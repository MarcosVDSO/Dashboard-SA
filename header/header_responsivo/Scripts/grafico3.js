
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
    

    var contexto = document.getElementById('Grafico3').getContext('2d');
    var meuGrafico = new Chart(contexto, {
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

