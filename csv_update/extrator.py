import gspread
import pandas as pd


client = gspread.service_account(filename='csv_update/credentials.json')

planilha_nome = 'Registro de Atividades e Frequência_v8_0'
planilha = client.open(planilha_nome)

nome_pagina = 'Tabela 1 usada no infografico entrega total'

planilha_selecionada = planilha.worksheet(nome_pagina)


dados_completos = planilha_selecionada.get_all_records()


df = pd.DataFrame(dados_completos)


df.to_csv('dados/tabela1.csv', index=False)

print("Dados exportados para o arquivo CSV com sucesso.")


