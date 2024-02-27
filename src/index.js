import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './home';
import AlgebricEx from './AlgebricExpressions';
import Map from './Map';
import Map1 from './Map1';
import Style from './styling';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Style />
    <App />
    <HomePage />
    <AlgebricEx />
    <Map />
    <Map1 /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
