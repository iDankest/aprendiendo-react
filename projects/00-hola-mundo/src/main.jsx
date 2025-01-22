import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <h1>Hola Mundo</h1>
    <button>Este pedazo de boton</button>
  </React.Fragment>,
);
