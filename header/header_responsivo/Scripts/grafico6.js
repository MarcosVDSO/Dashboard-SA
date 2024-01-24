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
quantidadeAtividades.textContent = '8';


divQuantidadeAtividades.appendChild(divDescricaoGrafico6);
divQuantidadeAtividades.appendChild(quantidadeAtividades);

var divDescricaodetalhadaGrafico6 = document.createElement('p');
divDescricaodetalhadaGrafico6.classList.add('divDescricaodetalhadaGrafico6');
divDescricaodetalhadaGrafico6.textContent = 'A Quantidade de atividades entregues do produto é:';

var quantidadeAtividadesEntreges = document.createElement('p');
quantidadeAtividadesEntreges.classList.add('quantidadeAtividadesEntreges');
quantidadeAtividadesEntreges.textContent = '3';

divQuantidadeAtividadesEntreges.appendChild(divDescricaodetalhadaGrafico6);
divQuantidadeAtividadesEntreges.appendChild(quantidadeAtividadesEntreges);

containerGrafico6.appendChild(divQuantidadeAtividades);
containerGrafico6.appendChild(divQuantidadeAtividadesEntreges);

