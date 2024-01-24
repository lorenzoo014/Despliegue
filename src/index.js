// import React from 'react';
// import { createRoot } from 'react-dom/client';

// const App = () => {
//   return <h1>Hola, mundo React!</h1>;
// };

// const root = document.getElementById('root');
// // Utiliza createRoot en lugar de ReactDOM.render
// const rootInstance = createRoot(root);
// rootInstance.render(<App />);

// // ReactDOM.render(<App />, document.getElementById('root'));//Aqui es donde salta el error 24/7
// export default App;


import React from 'react';
import { createRoot } from 'react-dom/client';
const App = () => {
    return <h1>Hola, mundo React!</h1>;
  };

const root = document.getElementById('root');

// Utiliza createRoot en lugar de ReactDOM.render
const rootInstance = createRoot(root);
rootInstance.render(<App />);



