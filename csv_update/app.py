from flask import Flask, request
import os
os.environ["OPENBLAS_NUM_THREADS"] = "1"
import subprocess
import gspread
import pandas as pd
from flask_cors import CORS  

app = Flask(__name__)
CORS(app, resources={r"/executar": {"origins": "*"}})

client = gspread.service_account(filename='./credentials.json')


@app.route('/Analytics_Academico/csv_update/executar', methods=['POST'])
def executar_codigo():
    if request.method == 'POST':
        try:
            selected_value = request.form.get('selectedValue')
            if selected_value == 'Produto 01':
                resultado = subprocess.check_output(['python', '-c', 'from csv_update.extrator import opcao1; print(opcao1())'])
                return resultado
            elif selected_value == 'Produto 02':
                resultado = subprocess.check_output(['python', '-c', 'from csv_update.extrator import opcao2; print(opcao2())'])
                return resultado
            elif selected_value == 'Produto 03':
                resultado = subprocess.check_output(['python', '-c', 'from csv_update.extrator import opcao3; print(opcao3())'])
                return resultado
            else:
                return "Opcao invalida"
            
        except Exception as e:
            return f"Erro ao executar o codigo: {e}"
    else:
        return "Metodo nao permitido. Use POST para acessar este recurso."   


if __name__ == '__main__':
   app.run(debug=True, host='0.0.0.0', port=5000)

