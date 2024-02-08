
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


    selectBox.addEventListener('change', function() {
        var selectedValue = selectBox.value;
        enviarRequisicaoPython(selectedValue);
    });

    
    function enviarRequisicaoPython(selectedValue) {
        var xhr = new XMLHttpRequest();
        var url = 'http://127.0.0.1:5000/executar'; 
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    console.log('Requisição enviada com sucesso!');
                    console.log('Resposta:', xhr.responseText);
                } else {
                    console.error('Erro na requisição:', xhr.status);
                }
            }
        };
    
       var data = 'selectedValue=' + encodeURIComponent(selectedValue);
       xhr.send(data);
    }
    