import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renderiza la aplicación correctamente', () => {
  render(<App />);
  const linkElement = screen.getByText(/hola, mundo/i);
  expect(linkElement).toBeInTheDocument();
});