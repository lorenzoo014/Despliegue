const http = require('http');

// Servidor HTTP básico con Node.js
const nodeServer = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('¡Hola, mundo desde Node.js!\n');
});

const NODE_PORT = 3002;
nodeServer.listen(NODE_PORT, () => {
  console.log(`Servidor de Node.js escuchando en el puerto ${NODE_PORT}`);
});

// Configuraciones básicas para Sails.js
const sails = require('sails');

const sailsAppConfig = {
  port: process.env.PORT || 1337,  // Puerto en el que escuchará la aplicación Sails.js
  models: {
    datastore: 'default',  // Usa el adaptador de base de datos predeterminado
  },
  datastores: {
    default: {
      adapter: 'sails-disk',  // Adaptador de base de datos en memoria (para desarrollo)
    },
  },
  hooks: {
    grunt: false,
    views: false,
    sockets: false,
    pubsub: false,
  },
};

// Inicia Sails.js y levanta el servidor
sails.lift(sailsAppConfig, (err) => {
  if (err) {
    console.error('No se pudo levantar Sails.js:', err);
    return;
  }

  console.log('Sails.js está levantado y listo para recibir solicitudes');
});
//----------------------------------------MI BASE DE DATOS---------------------------------------------------------//
//------------------El codigo que voy a proporcionar a continuacion es un codigo cuya unica finalidad---------------//
//------------------es verificar la correcta conexion entre la variable de entorno y la aplicacion------------------//
//-----------------------------------------------------------------------------------------------------------------//
const mysql = require('mysql2');

// Cargar variables de entorno desde el archivo .env
require('dotenv').config();

// Acceder a la variable de entorno DATABASE_URL
const databaseURL = process.env.DATABASE_URL;

// Parsear la cadena de conexión para obtener los componentes necesarios
const parsedURL = new URL(databaseURL);
const connectionConfig = {
  host: 'localhost',
  user: 'Lorenzo',
  password:'arturomesaredonda',
  database: 'mi_bdd',
  port: 3306,
};

// Crear la conexión a MySQL
const connection = mysql.createConnection(connectionConfig);

// Intentar conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }

  console.log('Conexión exitosa a la base de datos MySQL');

  // Realizar operaciones adicionales aquí si es necesario

  // Cerrar la conexión cuando hayas terminado
  connection.end((endErr) => {
    if (endErr) {
      console.error('Error al cerrar la conexión:', endErr);
    } else {
      console.log('Conexión cerrada correctamente');
    }
  });
});
//---------------Para comunicarme con el backend---------------//
const startMLflowRun = async () => {
  try {
      const response = await fetch('http://localhost:5000/start_run', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
      });

      const data = await response.json();
      console.log(data.message);
  } catch (error) {
      console.error('Error starting MLflow run:', error);
  }
};

// Llama a esta función cuando desees comenzar un nuevo run en MLflow desde tu aplicación.
startMLflowRun();




