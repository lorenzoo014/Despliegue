from flask import Flask, jsonify, request
import subprocess

app = Flask(__name__)

@app.route('/startMLflowScript', methods=['POST'])
def start_mlflow_script():
    try:
        # Ejecutar mlflow_script.py como un proceso separado
        subprocess.run(['python', 'mlflow_script.py'])
        return jsonify({'message': 'MLflow script started successfully'})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
