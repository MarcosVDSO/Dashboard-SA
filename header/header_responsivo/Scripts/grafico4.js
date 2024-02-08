function carregarDadosEExibirGraficos() {
    var caminhoCSV = '../../dados/tabela2.csv';
    carregarDadosCSV(caminhoCSV, function(dados) {
  
        Object.keys(dados).forEach(function(perfil) {

           
            criarConteinerGrafico5(perfil, dados[perfil]);
        });
    });
}



var containerGrafico4 = document.createElement('div');
containerGrafico4.classList.add('containerGrafico4');
document.getElementById('divGrafico4').appendChild(containerGrafico4);

var imagemgrafico4 = document.createElement('img');
imagemgrafico4.src = 'assets/imagemgrafico4.svg';  
imagemgrafico4.alt = 'imagem'; 
imagemgrafico4.classList.add('imagemgrafico4')

containerGrafico4.appendChild(imagemgrafico4);

var divDescricaoGrafico4 = document.createElement('p');
divDescricaoGrafico4.classList.add('divDescricaoGrafico4');
divDescricaoGrafico4.textContent = 'A atividade que teve o maior aproveitamento de tempo foi a atividade AM_1_6 ';

var divDescricaodetalhadaGrafico4 = document.createElement('p');
divDescricaodetalhadaGrafico4.classList.add('divDescricaodetalhadaGrafico4');
divDescricaodetalhadaGrafico4.textContent = 'Entregou 25 dias antes do fim do prazo';

containerGrafico4.appendChild(divDescricaoGrafico4);
containerGrafico4.appendChild(divDescricaodetalhadaGrafico4);