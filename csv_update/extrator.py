import gspread
import pandas as pd

# Busca a planilha
client = gspread.service_account(filename='credentials.json')
planilha = client.open('Registro de Atividades e Frequência_v8_0')

# Seleciona a planilha desejada (no exemplo, a sexta planilha, índice 5)
planilha_selecionada = planilha.get_worksheet(5)

# Obtém todos os registros da planilha selecionada
dados_completos = planilha_selecionada.get_all_records()

# Converte os dados para um DataFrame do Pandas
df = pd.DataFrame(dados_completos)

# Salva o DataFrame em um arquivo CSV
df.to_csv('../dados/tabela1.csv', index=False)

print("Dados exportados para o arquivo CSV com sucesso.")
