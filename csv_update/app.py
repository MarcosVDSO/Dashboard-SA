from flask import Flask, request
import subprocess
from flask_cors import CORS  

app = Flask(__name__)
CORS(app, resources={r"/executar": {"origins": "*"}})

@app.route('/executar', methods=['GET', 'POST'])
def executar_codigo():
    if request.method == 'POST':
        try:
            resultado = subprocess.check_output(['python', 'csv_update/extrator.py'])
            return resultado
        except Exception as e:
            return f"Erro ao executar o código: {e}"
    else:
        return "Método não permitido. Use POST para acessar este recurso."

if __name__ == '__main__':
    app.run(debug=True, port=5000)
