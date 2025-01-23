import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  // Main es el punto de trada de la aplicacion
  <StrictMode>
    <App />
  </StrictMode>,
);
