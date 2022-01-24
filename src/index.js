import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CarProvider from './context/Car';
import OperatorProvider from './context/Operator';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <OperatorProvider>
      <CarProvider>
        <App />
      </CarProvider>
    </OperatorProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
