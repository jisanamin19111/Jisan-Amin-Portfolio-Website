// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18 and above
import './styles.css'; // Make sure the styles are included

// Import the App from your scripts.jsx
import App from './scripts.jsx'; // Make sure the path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
