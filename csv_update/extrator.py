import gspread
import pandas as pd


client = gspread.service_account(filename='csv_update/credentials.json')

planilha_nome = ''

def opcao1():
    planilha_nome = 'Planilha_0'
    geraCsv(planilha_nome)

def opcao2():
    planilha_nome = 'Planilha_1'
    geraCsv(planilha_nome)

def opcao3():
    planilha_nome = 'Planilha_2'
    geraCsv(planilha_nome)

def geraCsv(planilha_nome):
    planilha = client.open(planilha_nome)

    nome_pagina = 'Tabela 1 usada no infografico entrega total'

    planilha_selecionada = planilha.worksheet(nome_pagina)


    dados_completos = planilha_selecionada.get_all_records()


    df = pd.DataFrame(dados_completos)


    df.to_csv('dados/tabela1.csv', index=False)

    print(f"Dados da {planilha_nome} exportados para o arquivo CSV com sucesso.")