function carregarDadosCSV() {
    fetch('../../dados/tabela5.csv')
        .then(response => response.text())
        .then(data => criarConteinerGrafico6(data));
}




function criarConteinerGrafico6(dataGrafico6){
    var dadosGrafico6 =dataGrafico6.replace(/(\d+),(\d+%)/g, '$1.$2');

    const linhas = dadosGrafico6.split('\n').map(linha => linha.trim());
    
  
    const cabecalho = linhas.shift().split(',');

  
    let totalAtividades = 0;
    let atividadesEntregues = 0;


    const statusPorCodigo = {};


    linhas.forEach(linha => {
        
        const colunas = linha.split(',');

        const codigo = colunas[0];

        
        if (!statusPorCodigo[codigo]) {
            statusPorCodigo[codigo] = {
                total: 0,
                entregues: 0
            };
        }

        
        statusPorCodigo[codigo].total++;

       
        if (colunas[1] === 'X') {
            
            statusPorCodigo[codigo].entregues++;
           
            atividadesEntregues++;
        }
    });

    totalAtividades = linhas.length;
    

















    var containerGrafico6 = document.createElement('div');
    containerGrafico6.classList.add('containerGrafico6');
    document.getElementById('divGrafico6').appendChild(containerGrafico6);

    var imagemgrafico6 = document.createElement('img');
    imagemgrafico6.src = 'assets/quantidadedeatividade.svg';  
    imagemgrafico6.alt = 'imagem'; 
    imagemgrafico6.classList.add('imagemgrafico6')

    containerGrafico6.appendChild(imagemgrafico6);


    var divQuantidadeAtividades  = document.createElement('div');
    divQuantidadeAtividades.classList.add('divQuantidadeAtividades');


    var divQuantidadeAtividadesEntreges  = document.createElement('div');
    divQuantidadeAtividadesEntreges.classList.add('divQuantidadeAtividades');



    var divDescricaoGrafico6 = document.createElement('p');
    divDescricaoGrafico6.classList.add('divDescricaoGrafico6');
    divDescricaoGrafico6.textContent = 'A Quantidade de atividades do produto é:';

    var quantidadeAtividades = document.createElement('p');
    quantidadeAtividades.classList.add('quantidadeAtividades');
    quantidadeAtividades.textContent = totalAtividades;


    divQuantidadeAtividades.appendChild(divDescricaoGrafico6);
    divQuantidadeAtividades.appendChild(quantidadeAtividades);

    var divDescricaodetalhadaGrafico6 = document.createElement('p');
    divDescricaodetalhadaGrafico6.classList.add('divDescricaodetalhadaGrafico6');
    divDescricaodetalhadaGrafico6.textContent = 'A Quantidade de atividades entregues do produto é:';

    var quantidadeAtividadesEntreges = document.createElement('p');
    quantidadeAtividadesEntreges.classList.add('quantidadeAtividadesEntreges');
    quantidadeAtividadesEntreges.textContent = atividadesEntregues;

    divQuantidadeAtividadesEntreges.appendChild(divDescricaodetalhadaGrafico6);
    divQuantidadeAtividadesEntreges.appendChild(quantidadeAtividadesEntreges);

    containerGrafico6.appendChild(divQuantidadeAtividades);
    containerGrafico6.appendChild(divQuantidadeAtividadesEntreges);
}
carregarDadosCSV();