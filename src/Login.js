import React,{Component, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo1 from './logo1.png';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { NavLink,Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from '../node_modules/reactstrap';
import Axios from 'axios';
import Aboutus from './Aboutus.js';
import Home from './Home.js';
import FormComponent from './FormComponent.js';
import PatientRecord from './PatientRecord';



const  Login = (props) => {

    const [password,setPassword] = useState('')
    const [cnic,setCnic] = useState('')
    const [classification,setClassification] = useState('')
    const [userData,setuserData] = useState([])


    
    const   readPatient=()=>{

          
             Axios.get("http://localhost:3001/readPatient", { 
                params : {cnic: cnic, password:password, classification:classification }
                })
             .then((response) => {
                 
                setuserData(response.data);
                console.log(userData.length);
                console.log(response.data.length);
                
                if ( response.data.length>0){

                 setuserData(response.data);
                console.log(response.data);
                console.log(userData);
                console.log(userData.length);
                // const Rname=userData[0].name;
                // const Rcnic=userData[0].cnic;
                // const Rage=userData[0].age;
                // const Rid=userData[0].patient_id;
                // const Rgender=userData[0].gender;
                // const Raddress=userData[0].address;
                // const Rmobile_no=userData[0].mobile_no;


                // console.log(Rname);
             
                if (response.data.length>0)
                {
                    props.history.push({ 
                        pathname: '/patientRecord',
                        state: {id:response.data[0].patient_id,name:response.data[0].name,cnic:response.data[0].cnic,age:response.data[0].age,patient_id:response.data[0].id,gender:response.data[0].gender,address:response.data[0].address,mobile_no:response.data[0].mobile_no,height:response.data[0].height,weight:response.data[0].weight,temperature:response.data[0].temperature,blood_pressure:response.data[0].blood_pressure,pulse_rate:response.data[0].pulse_rate,date:response.data[0].date,drug:response.data[0].drug,physician:response.data[0].physician,started:response.data[0].started,ended:response.data[0].ended}  

                       })
                }
       
            }

            else  if ( response.data.length==0)
            {
        
                alert("Please enter correct Cnic and Password or Register yourself");
                setCnic('');
                setPassword('');
                setClassification('');
                setuserData([]);
        
        
            }
    
                  
             });
          
             

    }

    const readallPatients=()=>{


        Axios.get("http://localhost:3001/readallPatients", { 
                params : {cnic: cnic, password:password, classification:classification }
                })
             .then((response) => {
                 

                
                const data_patient=(response.data);
                console.log(data_patient.length);
                console.log(response.data.length);

                
                

                if ( response.data.length > 0)
                {
                
                console.log(response.data);
                console.log(data_patient);
                console.log(data_patient.length);
                
            


                //console.log(Rname);
             
                if (data_patient.length>0)
                {
                    props.history.push({ 
                        pathname: '/DoctorsRecord',
                        state: {data:data_patient}  

                       })
                }
       
            }

             
    if (data_patient.length==0)
    {

        alert("Please enter correct Cnic and Password or Register yourself");
        setCnic('');
        setPassword('');
        setClassification('');
        setuserData([]);


    }

                  
             });
          

    }
    

    const  onChangeCnic=(e)=> {
        setCnic(e.target.value)
    }

    const  onChangePassword=(e)=>{
        setPassword(e.target.value)
    }

    const  onChangeClassificationDoctor=(e)=>{
        setClassification(e.target.value)
    }

    const   onChangeClassificationPatient = (e) => {
        setClassification(e.target.value)
    }


  const  onSubmit=(e)=> {
    e.preventDefault();
    

    if (classification=="patient")
    readPatient();
    else if (classification=="doctor")
    readallPatients();
   

  
      
       
            
       
    }



 useEffect(()=>{
        setCnic('');
                setPassword('');
                setClassification('');
                setuserData([]);
 },[])

    


        return(

             //complete container with header, body and footer
        <div classname="Compelete"> 


<Navbar bg="dark" expand="md">
                    <div className="container">
                        <NavbarToggler  />
                        <NavbarBrand className="mr-auto" href="/"><img src={logo1} height="30" width="41" alt='National Hospital' /></NavbarBrand>
                        <Collapse  navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/FormComponent'><span className="fa fa-address-card fa-lg"></span> Sign Up</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/Login'><span className="fa fa-address-card fa-lg"></span> Login</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

        {/*header of the page */ }
    
    <header class="jumbotron" >
        
            <div class="containerHeader" >
                <div class="row row-header">
                    <div class="row align-self-center">
                        <div class="col-2" >
                        <img  src={logo1}  >
                            </img>
                            </div>
                            <div class="col-1"></div>
                         <div class="col-6">   
                        <p style={{fontSize:"30px",fontStyle:"italic"}}><b>WE CARE FOR YOUR HEALTH !!! <br></br> THE BEST HOSPITAL IN THE TOWN IS GLAD TO SERVE YOU </b></p>
                    </div>
                    
                </div>
            </div>
            </div>    
        </header>
    
    
        {/*body of the page*/}
    
    <body>
    
    <div class="row justify-content-center">
    <h1 style={{fontSize:"48px",color:"brown"}}><b>LOGIN TO YOUR ACCOUNT</b></h1>
    
    </div>
    
            <div className="container col-6 col-sm-4">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label>Cnic</label>
                            <input type="number" placeholder="enter your cnic" name="cnic" value={cnic} autoComplete="off" onChange={onChangeCnic} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="enter your password" name="password" value={password} autoComplete="off" onChange={onChangePassword} className="form-control" />
                        </div>
                       
                        {/* checkbox for classification */}
                            <legend>PATIENT OR DOCTOR ??</legend>
                            {/*//for doctor*/}
                            <div classname="Field">
                            <label>
                            <input type="radio" name="classification" value="doctor" onChange={onChangeClassificationDoctor} checked={classification === "doctor"}/>
                            <span>Doctor</span>
                            </label>
                            </div>
                            {/*//for patient*/}
                            <div classname="Field">
                            <label>
                            <input type="radio" name="classification" value="patient" onChange={onChangeClassificationPatient} checked={classification === "patient"}/>
                            <span>Patient</span>
                            </label>
                            </div>
                          
                        <button type="submit"  class="btn btn-success btn-block">Submit</button>
                        
                    </form>
                    </div>
    
    
                    <br></br>
                     <br></br>
                    <br></br>
                    <br></br>
    
    
    </body>
    
        {/*footer of the page*/}
    
                    <footer class="jumbotron">
                    <div class="container2">
                <div class="row">             
                    <div class="col-4 offset-1 col-sm-2">
                        
                        <h5>Links</h5>
    
                        {/*routing*/}
                        <ul class="list-unstyled">
                            
                           
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/aboutus'>About Us</Link></li>
                            <li><Link to='/FormComponent'>Sign Up</Link></li>
                            <li><Link to='/Login'>Login</Link></li>
                            <li><Link to='/patientRecord'>PatientRecord</Link></li>
                        
                        
                        </ul>
    
                    </div>
                    <div class="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <p>
                          121, Clear Water Bay Road<br></br>
                          Shahrah-e-Faisal, Karachi,<br></br>
                          PAKISTAN<br></br>
                            <i class="fa fa-phone fa-lg"></i>: +92 1234 5678<br></br>
                            <i class="fa fa-fax fa-lg"></i>: +92 8765 4321<br></br>
                            <i class="fa fa-envelope fa-lg"></i>:
                            <a href="mailto:confusion@food.net">nationalhospital@hotmail.com</a>
                       </p>
                    </div>
                    
               </div>
               <div class="row justify-content-center">             
                    <div class="col-auto">
                        <p>© COPYRIGHT NATIONAL HOSPITAL </p>
                    </div>
               </div>
            </div>
            </footer>
    
             </div>
                    
     
        );






}


export default Login;