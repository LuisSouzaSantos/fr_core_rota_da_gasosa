import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import Main from './pages/main/index'
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(

  <React.StrictMode>
    <Main />
  </React.StrictMode>,

  document.getElementById('root')

);