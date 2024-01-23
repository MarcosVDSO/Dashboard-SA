import gspread
import pandas as pd

#busca a planilha
client = gspread.service_account(filename='credentials.json')
planilha = client.open('download')

#seleciona todas as células
dados = planilha.get_worksheet(0)
dados_completos = dados.get_all_records()

# Converte os dados para DF do Pandas
df = pd.DataFrame(dados_completos)

df.to_csv('../dados/tabela1.csv', index=False)

print("Dados exportados para o arquivo CSV com sucesso.")

