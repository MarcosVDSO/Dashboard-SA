var containerGrafico5 = document.createElement('div');
containerGrafico5.classList.add('containerGrafico5');
document.getElementById('divGrafico5').appendChild(containerGrafico5);

var imagemgrafico5 = document.createElement('img');
imagemgrafico5.src = 'assets/perfilmaiortaxa.svg';  
imagemgrafico5.alt = 'imagem'; 
imagemgrafico5.classList.add('imagemgrafico5')

containerGrafico5.appendChild(imagemgrafico5);

var divDescricaoGrafico5 = document.createElement('p');
divDescricaoGrafico5.classList.add('divDescricaoGrafico5');
divDescricaoGrafico5.textContent = 'O perfil com maior taxa de entrega no prazo é o: ';

var nomeDoPerfilGrafico5 = document.createElement('p');
nomeDoPerfilGrafico5.classList.add('nomeDoPerfilGrafico5');
nomeDoPerfilGrafico5.textContent = 'Analista Administrativo';

var divDescricaodetalhadaGrafico5 = document.createElement('p');
divDescricaodetalhadaGrafico5.classList.add('divDescricaodetalhadaGrafico5');
divDescricaodetalhadaGrafico5.textContent = 'com 40% de entregas no prazo feitas.';

containerGrafico5.appendChild(divDescricaoGrafico5);
containerGrafico5.appendChild(nomeDoPerfilGrafico5);
containerGrafico5.appendChild(divDescricaodetalhadaGrafico5);