// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18 and above
import './styles.css'; // Make sure the styles are included
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
// Import the App from your scripts.jsx
import App from './scripts.jsx'; // Make sure the path is correct
//import selfie from './selfie.png'; // Import the image

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
