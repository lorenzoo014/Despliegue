from flask import Flask, jsonify
import mlflow

app = Flask(__name__)

@app.route('/start_run', methods=['POST'])
def start_mlflow_run():
    mlflow.start_run()
    return jsonify({'message': 'MLflow run started successfully'})

if __name__ == '__main__':
    app.run(debug=True)
