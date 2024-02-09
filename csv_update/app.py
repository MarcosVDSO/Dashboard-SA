from flask import Flask, request
import subprocess
import gspread
import pandas as pd
from flask_cors import CORS  

app = Flask(__name__)
CORS(app, resources={r"/executar": {"origins": "*"}})

client = gspread.service_account(filename='csv_update/credentials.json')

@app.route('/executar', methods=['GET', 'POST'])
def executar_codigo():
    if request.method == 'POST':
        try:
            selected_value = request.form.get('selectedValue')
            if selected_value == 'Produto 01':
                resultado = subprocess.check_output(['python', '-c', 'from csv_update.extrator import opcao1; print(opcao1())'])
                return resultado
            elif selected_value == 'Produto 02':
                resultado = subprocess.check_output(['python', '-c', 'from csv_update.extrator import opcao2; print(opcao1())'])
                return resultado
            elif selected_value == 'Produto 03':
                resultado = subprocess.check_output(['python', '-c', 'from csv_update.extrator import opcao3; print(opcao1())'])
                return resultado
            else:
                return "Opção inválida"
            
        except Exception as e:
            return f"Erro ao executar o código: {e}"
    else:
        return "Método não permitido. Use POST para acessar este recurso."   


if __name__ == '__main__':
    app.run(debug=True, port=5000)
