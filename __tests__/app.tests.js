// import { render, screen } from '@testing-library/react';
// import App from '../src/index';  // Ajusta la ruta según la estructura de tu proyecto
// import React from 'react';

// test('renderiza la aplicación correctamente', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/hola, mundo/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { render, screen } from '@testing-library/react';
import App from '../src/index';

test('renderiza la aplicación correctamente', () => {
  render(<App />);
  const linkElement = screen.getByText(/hola, mundo/i);
  expect(linkElement).toBeInTheDocument();
});

