
var percentualConclusao;
var percentualNaoConclusao;

function carregarDadosCSV() {
    fetch('../../dados/tabela1.csv')
        .then(response => response.text())
        .then(data => processarDadosCSV(data));
}

function processarDadosCSV(Datatabela1) {
    var linhas = Datatabela1.split('\n');
    var dados = [];

    for (var i = 1; i < linhas.length; i++) {
        var colunas = linhas[i].split(',');
        
        if (colunas.length >= 2) {
            var codigo = colunas[0].trim();
            var percentual = (colunas[1].trim().replace(',', '.').replace('%', '').replace('"', ''));
            
            dados.push({ codigo: codigo, percentual: percentual });
                
            
        }
    }
  
    if (dados.length > 0) {
        percentualConclusao  = dados.length > 0 ? dados[dados.length - 1].percentual : '0';
    
       
        dados.pop();
        var percentualNaoConclusao = (100.00 - percentualConclusao);

        criarGrafico1(percentualConclusao, percentualNaoConclusao);
    }
}



function criarGrafico1(percentualConclusao, percentualNaoConclusao) {
    var ctx = document.getElementById('Grafico1').getContext('2d');
    var meuGrafico = new Chart(ctx, {
        type: 'pie',
        data: {
            datasets: [{
                data: [percentualConclusao, percentualNaoConclusao],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                ],
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Porcentagem de Conclusão do Produto',
            },
        },
        
    
    });

    if (percentualConclusao !== 0 || percentualNaoConclusao !== 0) {
        var containerRotulos = document.getElementById('valorPercentual');
        containerRotulos.innerHTML = '';

        if (percentualConclusao !== 0) {
            var rotuloConclusao = document.createElement('div');
            rotuloConclusao.textContent = `${percentualConclusao}%`;
            containerRotulos.appendChild(rotuloConclusao);
        }

        if (percentualNaoConclusao !== 0) {
            var rotuloNaoConclusao = document.createElement('div');
            rotuloNaoConclusao.textContent = `${percentualNaoConclusao}%`;
            containerRotulos.appendChild(rotuloNaoConclusao);
        }
    }

}


carregarDadosCSV();

