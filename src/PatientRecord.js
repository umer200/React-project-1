import React,{Component, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from '../node_modules/reactstrap';
import { NavLink,Link } from 'react-router-dom';
import './App.css';
import logo1 from './logo1.png';
import Aboutus from './Aboutus.js';
import FormComponent from './FormComponent.js';
import Home from './Home.js';
import Login from './Login.js';


// class PatientRecord extends Component {


//     constructor(props) {
//         super(props);
// this.state = this.props.location.state ;
// this.props.history.replace(this.props.location.pathname, this.state);
//         this.toggleNav = this.toggleNav.bind(this);
//         this.state = {
//           isNavOpen: false
//         };
//       }

//       toggleNav() {
//         this.setState({
//           isNavOpen: !this.state.isNavOpen
//         });
//       }

     

//     render()
//     {

        
        

       
        

//         return(

//             <div class="complete">

// <Navbar bg="dark" expand="md">
//                     <div className="container">
//                         <NavbarToggler  />
//                         <NavbarBrand className="mr-auto" href="/"><img src={logo1} height="30" width="41" alt='National Hospital' /></NavbarBrand>
//                         <Collapse  navbar>
//                             <Nav navbar>
//                             <NavItem>
//                                 <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink className="nav-link" to='/Login'><span className="fa fa-address-card fa-lg"></span> Logout</NavLink>
//                             </NavItem>
//                             </Nav>
//                         </Collapse>
//                     </div>
//                 </Navbar>

// <header class="jumbotron">
//         <div class="container">
//             <div class="col-12 col-sm align-self-center">
//                 <img src={logo1} class="img-fluid"></img>
//             </div>
//             <p style={{fontSize:"30px",fontStyle:"italic"}}><b>WE CARE FOR YOUR HEALTH !!! <br></br> THE BEST HOSPITAL IN THE TOWN IS GLAD TO SERVE YOU </b></p>
//                 </div>
        
//     </header>

//     <body>
//         {
// <div class="row">
// <div class="col-10 offset-2 col-sm-6" style={{backgroundColor: "lightblue", color: "black",fontSize:"30px",fontStyle:"italic"}}>
// <h1 style={{textAlign:'center'}}><b>PATIENTS RECORD</b></h1><br/>
// <ul>
// <li>
//     name: {location.state.cnic}
// </li>
// <li>
//     age: 19
// </li>
// <li>
//     gender: Male
// </li>
// <li>
//     cnic:123124134314
// </li>
//             <table style={{border:"1px solid black",borderCollapse: "collapse"}}>
//                 <tr>
//                 <th>name</th>
//                 <th>age</th>
//                 <th>gender</th>
//                 <th>cnic</th>
//                 </tr>
//                 <tr>
//                <td>umer</td>
//                <td>19</td>
//                <td>Male</td>
//                <td>12310207802</td>
//                </tr>
//                <tr>
//                <td>umer</td>
//                <td>19</td>
//                <td>Male</td>
//                <td>12310207802</td>
//                </tr>

//             </table>

// </ul>
// <h1 style={{textAlign:'center'}}><b>MEDICAL HISTORY</b></h1><br/>


// </div>
// </div>

//             /*   PATIENTS RECORD WILL BE INSERTED HERE */
//         }
//     </body>

//     {/*footer*/}

// <footer class="jumbotron">
//                 <div class="container2">
//             <div class="row">             
//                 <div class="col-4 offset-1 col-sm-2">
                    
//                     <h5>Links</h5>
                    
                    
//                      {/*routing*/}
//                     <ul class="list-unstyled">
                  
                       
//                         <li><Link to='/home'>Home</Link></li>
//                         <li><Link to='/aboutus'>About Us</Link></li>
                       
                        
//                     </ul>

//                 </div>
//                 <div class="col-7 col-sm-5">
//                     <h5>Our Address</h5>
//                     <p>
// 		              121, Clear Water Bay Road<br></br>
// 		              Shahra-e-Faisal, Karachi,<br></br>
// 		              PAKISTAN<br></br>
//                         <i class="fa fa-phone fa-lg"></i>: +92 1234 5678<br></br>
//                         <i class="fa fa-fax fa-lg"></i>: +92 8765 4321<br></br>
//                         <i class="fa fa-envelope fa-lg"></i>:
//                         <a href="mailto:confusion@food.net">nationalhospital@hotmail.com</a>
// 		           </p>
//                 </div>
                
//            </div>
//            <div class="row justify-content-center">             
//                 <div class="col-auto">
//                     <p>© COPYRIGHT NATIONAL HOSPITAL</p>
//                 </div>
//            </div>
//         </div>
//         </footer>



// </div>

//         );

// }



// }



const PatientRecord=(props)=>{


     
    const location=useLocation();
    useEffect(()=>{

    },[])

       

        console.log(location.state);
        

        return(

            <div class="complete">

<Navbar bg="dark" expand="md">
                    <div className="container">
                        <NavbarToggler  />
                        <NavbarBrand className="mr-auto" href="/"><img src={logo1} height="30" width="41" alt='National Hospital' /></NavbarBrand>
                        <Collapse  navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home' ><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus' ><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/Login' ><span className="fa fa-address-card fa-lg"></span> Logout</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

<header class="jumbotron" style={{margin:0,paddingBottom:0}}>
        <div class="container">
            <div class="col-12 col-sm align-self-center">
                <img src={logo1} class="img-fluid"></img>
            </div>
            <p style={{fontSize:"30px",fontStyle:"italic"}}><b>WE CARE FOR YOUR HEALTH !!! <br></br> THE BEST HOSPITAL IN THE TOWN IS GLAD TO SERVE YOU </b></p>
                </div>
        
    </header>

    <body style={{margin:0,paddingTop:0}}>
        {
 <div style={{backgroundColor:"red"}}>           
<div class="row">
<div class=" offset-1 col-sm-10" style={{backgroundColor: "lightblue", color: "black",fontSize:"30px",fontStyle:"italic"}}>
<h1 style={{textAlign:'center',textDecorationLine:'underline'}}><b>PATIENT'S DETAILS</b></h1><br/>

            <table style={{border:"1px solid black",borderCollapse: "collapse"}}>
                <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
                <th>gender</th>
                <th>cnic</th>
                <th>mobile_no</th>
                <th>address</th>
                </tr>
                <tr>
               <td>{location.state.id}</td>     
               <td>{location.state.name}</td>
               <td>{location.state.age}</td>
               <td>{location.state.gender}</td>
               <td>{location.state.cnic}</td>
               <td>{location.state.mobile_no}</td>
               <td>{location.state.address}</td>
               </tr>
               

            </table>
           


<h1 style={{textAlign:'center',textDecorationLine:'underline',paddingTop:20}}><b>PATIENT RECORD</b></h1><br/>


<table style={{border:"1px solid black",borderCollapse: "collapse"}}>
            <tr>
                <th>height</th>
                <th>weight</th>
                <th>temperature</th>
                <th>blood pressure</th>
                <th>pulse rate</th>
                <th>date</th>
                </tr>
                
                <tr>
               <td>{location.state.height}</td>     
               <td>{location.state.weight}</td>
               <td>{location.state.temperature}</td>
               <td>{location.state.blood_pressure}</td>
               <td>{location.state.pulse_rate}</td>
               <td>{location.state.date}</td>
               </tr>

            </table>

            <h1 style={{textAlign:'center',textDecorationLine:'underline',paddingTop:20}}><b>MEDICAL HISTORY</b></h1><br/>

            <table style={{border:"1px solid black",borderCollapse: "collapse"}}>
            <tr>
                <th>drug</th>
                <th>physician</th>
                <th>start date</th>
                <th>end date</th>
                </tr>
                
                <tr>
               <td>{location.state.drug}</td>     
               <td>{location.state.physician}</td>
               <td>{location.state.started}</td>
               <td>{location.state.ended}</td>
               
               </tr>

            </table>

</div>
</div>
</div>
            /*   PATIENTS RECORD WILL BE INSERTED HERE */
        }
    </body>

    {/*footer*/}

<footer class="jumbotron">
                <div class="container2">
            <div class="row">             
                <div class="col-4 offset-1 col-sm-2">
                    
                    <h5>Links</h5>
                    
                    
                     {/*routing*/}
                    <ul class="list-unstyled">
                  
                       
                        <li><Link to='/home' >Home</Link></li>
                        <li><Link to='/aboutus' >About Us</Link></li>
                       
                        
                    </ul>

                </div>
                <div class="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <p>
		              121, Clear Water Bay Road<br></br>
		              Shahra-e-Faisal, Karachi,<br></br>
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
                    <p>© COPYRIGHT NATIONAL HOSPITAL</p>
                </div>
           </div>
        </div>
        </footer>



</div>

        );

}






export default PatientRecord;