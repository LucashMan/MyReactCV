import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContactForm from './Contactform';
import AnimatedSection from './AnimatedSection';
import reportWebVitals from '../../reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ContactForm />
    <AnimatedSection />
  </React.StrictMode>
);
reportWebVitals();
