import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FormComponent from './FormComponent.js';
import Aboutus from './Aboutus.js';
import Home from './Home.js';
import Login from './Login.js';
import PatientRecord from './PatientRecord.js';
import {BrowserRouter} from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

ReactDOM.render(



  <BrowserRouter>
  <App/>
  </BrowserRouter>

  ,
  document.getElementById('root')
);

reportWebVitals();


