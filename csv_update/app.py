from flask import Flask, request
import subprocess
from flask_cors import CORS  

app = Flask(__name__)
CORS(app) 

@app.route('/executar', methods=['POST'])
def executar_codigo():
    selected_value = request.form.get('selectedValue')
    
    
    try:
        resultado = subprocess.check_output(['python', './extrator.py', selected_value])
        return resultado
    except Exception as e:
        return f"Erro ao executar o código: {e}"

if __name__ == '__main__':
    app.run(debug=True)
