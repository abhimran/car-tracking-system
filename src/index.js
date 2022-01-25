import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CarProvider from './context/Car';
import CityProvider from './context/City';
import OperatorProvider from './context/Operator';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CityProvider>
      <OperatorProvider>
        <CarProvider>
          <App />
        </CarProvider>
      </OperatorProvider>
    </CityProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
