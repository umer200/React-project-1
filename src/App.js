
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NavLink,Link } from 'react-router-dom';
import Home from './Home.js';
import Aboutus from './Aboutus.js';
import FormComponent from './FormComponent.js';
import Login from './Login.js';
import PatientRecord from './PatientRecord.js';
import DoctorsRecord from './DoctorsRecord.js';

function App() {
  
  
  return (

   <div>
                                           

<Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/Login" component={Login}></Route>
    <Route exact path="/FormComponent" component={FormComponent}></Route>
    <Route exact path="/aboutus" component={Aboutus}></Route>
    <Route exact path="/home" component={Home}></Route>
    <Route exact path="/patientRecord" component={PatientRecord}></Route>
    <Route exact path="/DoctorsRecord" component={DoctorsRecord}></Route>
   
</Switch>

    </div>
    
  );
}

export default App;
