// import { render, screen } from '@testing-library/react';
// import App from '../src/index';  // Ajusta la ruta según la estructura de tu proyecto
// import React from 'react';

// test('renderiza la aplicación correctamente', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/hola, mundo/i);
//   expect(linkElement).toBeInTheDocument();
// });

/** @jsxRuntime classic */
/** @jsx jsx */

const { render, screen } = require('@testing-library/react');
const { jsx } = require('theme-ui'); // Importa jsx para que Jest pueda manejar JSX.
const App = require('../src/index').default;

test('renderiza la aplicación correctamente', () => {
    render(<App />);
    const linkElement = screen.getByText(/hola, mundo/i);
    expect(linkElement).toBeInTheDocument();
});


