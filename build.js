const { execSync } = require('child_process');
const fs = require('fs-extra');

// Limpiar el directorio de archivos estáticos existentes
fs.emptyDirSync('public');

// Compilar el código fuente (esto puede variar según el entorno)
try {
  execSync('tu_comando_de_compilacion', { stdio: 'inherit' });
} catch (error) {
  console.error('Error durante la compilación:', error);
  process.exit(1);
}

// Copiar archivos estáticos al directorio 'public'
fs.copySync('ruta_fuente', 'public');

console.log('¡La construcción se completó exitosamente!');
