# Despliegue
### Para poder hacer un buen seguimiento de la practica recomiendo seguir el informe que se encuentra en formato pdf
Posibles comandos para el package.json
"start": "node app.js"
// "start": "webpack-dev-server --mode development --open",
// "build": "webpack --mode production"
    <!-- "test": "echo \"Error: no test specified\" && exit 1", -->

#------------URL de la bdd--------------#
mysql://Lorenzo:arturomesaredonda@localhost:3306/mibdd
#--------------#

const { render, screen } = require('@testing-library/react');
const App = require('../src/index').default;

test('renderiza la aplicación correctamente', () => {
  render(<App />);
  const linkElement = screen.getByText(/hola, mundo/i);
  expect(linkElement).toBeInTheDocument();
});
