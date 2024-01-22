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
// //MI BASE DE DATOS
require('dotenv').config();
const databaseURL = process.env.DATABASE_URL;
console.log(`La URL de la base de datos es: ${databaseURL}`);
