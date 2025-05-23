import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Add this script to handle initial theme
const setInitialTheme = `
  (function() {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('vite-ui-theme');
    
    if (storedTheme) {
      document.documentElement.classList.add(storedTheme);
    } else if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  })()
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Add initial theme script */}
    <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
    <App />
  </React.StrictMode>,
)
