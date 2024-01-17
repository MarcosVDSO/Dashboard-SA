function carregarDadosEExibirGraficos() {
    var caminhoCSV = '../../dados/tabela2.csv';
    carregarDadosCSV(caminhoCSV, function(dados) {
  
        Object.keys(dados).forEach(function(perfil) {
            criarConteinerEExibirGrafico(perfil, dados[perfil]);
        });
    });
}


function criarConteinerEExibirGrafico(perfil, dados) {
    var containerId = perfil.toLowerCase().replace(/\s+/g, '-');
    var container = document.createElement('div');
    container.id = containerId;
    container.classList.add('Grafico2');
    document.getElementById('divGrafico2').appendChild(container);

    var canvasId = containerId + '-chart';
    var canvas = document.createElement('canvas');
    canvas.id = canvasId;
    container.appendChild(canvas);
    var divperfil = document.createElement('div');
    divperfil.classList.add('imagemPerfil');
    divperfil.id = 'imagemPerfil';
    var imagem = document.createElement('img');
    imagem.src = 'assets/imagemdoperfil.svg';  
    imagem.alt = 'imagem de Perfil'; 
    divperfil.appendChild(imagem);

    divperfil.appendChild(imagem);

    container.appendChild(divperfil);
  

    var context = canvas.getContext('2d');
    var meuGrafico = new Chart(context, {
        type: 'pie',
        data: {
            datasets: [{
                data: Object.values(dados),
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
                text: 'Gráfico de Pizza - ' + perfil,
            },
        },
    });
}

function carregarDadosCSV(caminho, callback) {
    fetch(caminho)
        .then(response => response.text())
        .then(data => {
            data = data.replace(/(\d+),(\d+%)/g, '$1.$2');
         
            var linhas = data.split('\n');
         
            var cabecalho = linhas[1].split(',');

            var dados = {};
            for (var i = 2; i < linhas.length; i++) {
                var valores = linhas[i].split(',');
                var perfil = valores[0];

                dados[perfil] = {};
                for (var j = 1; j < cabecalho.length; j++) {
                    dados[perfil][cabecalho[j]] = parseFloat(valores[j].replace('%', '').replace('"', ''));
                }
            }

            callback(dados);
        })
        .catch(error => console.error('Erro ao carregar dados do CSV:', error));
}

carregarDadosEExibirGraficos();