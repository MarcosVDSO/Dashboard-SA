import gspread
import pandas as pd

client = gspread.service_account(filename='csv_update/credentials.json')

def opcao1():
    geraCsv('Planilha_0')

def opcao2():
    geraCsv('Planilha_1')

def opcao3():
    geraCsv('Planilha_2')

def geraCsv(planilha_nome):
    planilha = client.open(planilha_nome)

    paginas = [
        ('Tabela 1 usada no infografico entrega total',1),
        ('tabela 3 usada no infografico',2),
        ('tabela2 usada no infografico',4)
    ]

    for (nome_pagina, tabela) in paginas:
        planilha_selecionada = planilha.worksheet(nome_pagina)
        dados_completos = planilha_selecionada.get_all_values()
        df = pd.DataFrame(dados_completos)
        df.to_csv(f'dados/tabela{tabela}.csv', index=False)
        with open(f'dados/tabela{tabela}.csv', 'r') as arquivo:
            linhas = arquivo.readlines()[1:]
        with open(f'dados/tabela{tabela}.csv', 'w') as arquivo:
            arquivo.writelines(linhas)

    print(f"Dados da {planilha_nome} exportados para o arquivo CSV com sucesso.")
