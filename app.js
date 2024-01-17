// Versión muy simplificada de la app para ver su funcionalidad

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('¡Hola, mundo!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

//Este es un servidor HTTP básico que responde con "¡Hola, mundo!" en el puerto 3000.

