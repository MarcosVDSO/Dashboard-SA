import gspread
import pandas as pd

client = gspread.service_account(filename='credentials.json')
planilha = client.open('Registro de Atividades e Frequência_v8_0')

#escolhe a página da planilha
planilha_selecionada = planilha.get_worksheet(5)

dados_completos = planilha_selecionada.get_all_records()
df = pd.DataFrame(dados_completos)
df.to_csv('../dados/tabela1.csv', index=False)

print("Dados exportados para o arquivo CSV com sucesso.")
