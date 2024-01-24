from flask import Flask, jsonify,request
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

@app.route('/start_mlflow_script', methods=['POST'])
def start_mlflow_script():
    # try:
    # 
    #     # Ejecutar mlflow_script.py como un proceso separado
    #     subprocess.run(['python', 'mlflow_script.py'])
    #     return jsonify({'message': 'MLflow script started successfully'})
    # except Exception as e:
    #     return jsonify({'error': str(e)})
    # return jsonify({'message': 'Hello from start_mlflow_script'})
    if request.method == 'POST':
        # Aquí puedes poner el código para ejecutar tu script de MLflow
        # subprocess.run(['python', 'mlflow_script.py'])
        return jsonify({'message': 'MLflow script started successfully'})
    if request.method == 'POST':
        return jsonify({'message': 'Hola_hpoa'})
    else:
        return jsonify({'message': 'Hello from start_mlflow_script'})
    



if __name__ == '__main__':
    app.run(debug=True)
