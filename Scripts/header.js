
function showInicio() {

    const mainContent = document.getElementById("Conteudo");

    
    mainContent.innerHTML = "";

    
    mainContent.innerHTML +=  "<p>Olá, bem-vindo!</p>";
}

function showDashboard() {
    const mainContent = document.getElementById("Conteudo");

    mainContent.innerHTML = "";

   
    mainContent.innerHTML += `
    <iframe title="dasboard_petcomp" width="100%" height="100%" src="https://app.powerbi.com/view?r=eyJrIjoiNzkzOGZiMzMtZDEyNi00MmVhLTgzOGEtMDIyY2NjOWJkNDVkIiwidCI6Ijc0MWEyYmU0LTIyZWQtNGE4Zi1hYWRkLWUyNTQwYTIyN2Y1NiJ9" frameborder="0" allowFullScreen="true"></iframe>
    `;
}
function showInfografico() {
    const mainContent = document.getElementById("Conteudo");

    
    mainContent.innerHTML = "";

    
    mainContent.innerHTML += `
        <div class="containerDaEsquerda">
            <div class="Filtro" id="Filtro"></div>
            <div class="divGrafico1" id="divGrafico1"></div>
            <div class="divGrafico3" id="divGrafico3"></div>
            <div class="divGrafico7" id="divGrafico7"></div>
        </div>
        
        <div class="containerDoMeio">
            <div class="divGrafico6" id="divGrafico6"></div>
            <div class="divGrafico4" id="divGrafico4"></div>
            <div class="divGrafico5" id="divGrafico5"></div>
        </div>
        
        <div class="containerDaDireita">
            <div class="divGrafico2" id="divGrafico2"></div>
        </div>
    `;

    loadScript("Scripts/filtro.js");
    loadScript("Scripts/grafico1.js");
    loadScript("Scripts/grafico2.js");
    loadScript("Scripts/grafico3.js");
    loadScript("Scripts/grafico4.js");
    loadScript("Scripts/grafico5.js");
    loadScript("Scripts/grafico6.js");
    loadScript("Scripts/grafico7.js");
    
}


function loadScript(scriptSrc) {
    const script = document.createElement("script");
    script.src = scriptSrc;
    document.head.appendChild(script);
}


