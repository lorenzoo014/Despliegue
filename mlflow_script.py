import mlflow
import mlflow.sklearn
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import numpy as np

# Generar datos de ejemplo
np.random.seed(42)
X = 2 * np.random.rand(100, 1)
y = 4 + 3 * X + np.random.randn(100, 1)

# Dividir los datos en conjuntos de entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Entrenar un modelo de regresión lineal
model = LinearRegression()
model.fit(X_train, y_train)

# Realizar predicciones en el conjunto de prueba
y_pred = model.predict(X_test)

# Calcular el error cuadrático medio
mse = mean_squared_error(y_test, y_pred)

# Iniciar un run de MLflow
with mlflow.start_run():

    # Log de parámetros del modelo
    mlflow.log_param("alpha", model.intercept_[0])
    mlflow.log_param("beta", model.coef_[0][0])

    # Log de métricas
    mlflow.log_metric("mse", mse)

    # Log del modelo
    mlflow.sklearn.log_model(model, "model")
