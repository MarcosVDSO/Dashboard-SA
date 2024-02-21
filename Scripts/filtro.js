
function criarFiltro() {  
   var textoFiltro = document.createElement('p');
    textoFiltro.classList.add('textoFiltro');
    textoFiltro.textContent = 'Produto';

    var selectBox = document.createElement("select");
    selectBox.id = "produtoSelect";
    selectBox.classList.add("SelectFiltro");

    var label = document.createElement("label");
    label.textContent = "Escolha o produto";
    label.htmlFor = "produtoSelect";

    var optionVazia = document.createElement("option");
    optionVazia.value = "";
    optionVazia.text = "Selecione um produto";
    optionVazia.selected = true;
    selectBox.appendChild(optionVazia);

    var produtos = ["Produto 01", "Produto 02", "Produto 03"];
    for (var i = 0; i < produtos.length; i++) {
        var option = document.createElement("option");
        option.value = produtos[i];
        option.text = produtos[i];
        selectBox.appendChild(option);
    }


    var filtroDiv = document.getElementById("Filtro");
    filtroDiv.appendChild(textoFiltro);

    filtroDiv.appendChild(selectBox);
    var selectBox = document.getElementById('produtoSelect');

    selectBox.addEventListener('change', function() {
        var selectedValue = selectBox.value;

        if (selectedValue !== "Selecione um produto") {
            enviarRequisicaoPython(selectedValue);
        }
    });

  
    window.onload = function() {
        var selectedProduct = localStorage.getItem('selectedProduct');
        if (selectedProduct) {
            selectBox.value = selectedProduct;
        }
    };
    window.onbeforeunload = function() {
        localStorage.setItem('selectedProduct', selectBox.value);
    };
    
    function enviarRequisicaoPython(selectedValue) {
        var xhr = new XMLHttpRequest();
        var url = 'https://petcompufma.org/Analytics_Academico/csv_update/executar';

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var resposta = JSON.parse(xhr.responseText);
                    if ('result' in resposta) {
                        console.log('Requisição enviada com sucesso!');
                        console.log('Resposta:', resposta.result);
                    } else if ('error' in resposta) {
                        console.error('Erro na requisição:', resposta.error);
                    }
                } else {
                    console.error('Erro na requisição:', xhr.status);
                }
            }
        };
        
    
       var data = 'selectedValue=' + encodeURIComponent(selectedValue);
       xhr.send(data);
    }
}


if (document.getElementById("Filtro")) {
    criarFiltro();
}