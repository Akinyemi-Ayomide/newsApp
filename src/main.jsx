import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import NavContextProvider from './context/NavContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavContextProvider>
      <App />
    </NavContextProvider>
  </BrowserRouter>,
);
