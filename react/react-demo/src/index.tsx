import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
import { Test } from './components/Test';
// import { TypeScript } from './components/Test';

ReactDOM.render(
  <React.StrictMode>
    <h1>React demo site</h1>
    {/* <JavaScript v="test value" w="test value2" /> */}
    <Test />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
