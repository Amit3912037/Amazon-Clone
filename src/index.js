import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CartContextProvider from './store/CartContextProvider';
import AuthContextProvider from './store/AuthContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
