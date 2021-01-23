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

// class Login extends Component {

//     constructor(props){
//         super(props);
//         this.onChangeCnic = this.onChangeCnic.bind(this);
//         this.onChangePassword=this.onChangePassword.bind(this);
//         this.onChangeClassificationDoctor=this.onChangeClassificationDoctor.bind(this);
//         this.onChangeClassificationPatient=this.onChangeClassificationPatient.bind(this);
//         // this.readPatient=this.readPatient(this);

//         this.state = {
//             password: '',
//             cnic: '',
//             classification: '',
//             userData:[]
//         }

//     }

    
//     readPatient=()=>{

//         const info={}
//             info.cnic = this.state.cnic;
//             info.password= this.state.password;
//             info.classification= this.state.classification;
    
//         debugger
        
//              Axios.get("http://localhost:3001/readPatient",{
//                info
//               })
//              .then((response) => {
//                  debugger
//                  console.log(response)
//             //    setEmployeeList(response.data);
//              });
          
//     }
    

//     onChangeCnic(e) {
//         this.setState({cnic : e.target.value })
//     }

//     onChangePassword(e){
//         this.setState({password: e.target.value})
//     }

//     onChangeClassificationDoctor(e){
//         this.setState({classification : e.target.value})
//     }

//     onChangeClassificationPatient(e){
//         this.setState({classification : e.target.value})
//     }


//     onSubmit(e) {
//         e.preventDefault()
                       
//         readPatient();
       
//     }

//     componentDidMount() {
        
  
//         this.setState({
//             password: '', 
//             cnic : '',
//             classification : ''
//         })
    

// }

//     render()
//     {


//         return(

//              //complete container with header, body and footer
//         <div classname="Compelete"> 


// <Navbar bg="dark" expand="md">
//                     <div className="container">
//                         <NavbarToggler onClick={this.toggleNav} />
//                         <NavbarBrand className="mr-auto" href="/"><img src={logo1} height="30" width="41" alt='National Hospital' /></NavbarBrand>
//                         <Collapse isOpen={this.state.isNavOpen} navbar>
//                             <Nav navbar>
//                             <NavItem>
//                                 <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink className="nav-link" to='/FormComponent'><span className="fa fa-address-card fa-lg"></span> Sign Up</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink className="nav-link" to='/Login'><span className="fa fa-address-card fa-lg"></span> Login</NavLink>
//                             </NavItem>
//                             </Nav>
//                         </Collapse>
//                     </div>
//                 </Navbar>

//         {/*header of the page */ }
    
//     <header class="jumbotron" >
        
//             <div class="containerHeader" >
//                 <div class="row row-header">
//                     <div class="row align-self-center">
//                         <div class="col-2" >
//                         <img  src={logo1}  >
//                             </img>
//                             </div>
//                             <div class="col-1"></div>
//                          <div class="col-6">   
//                         <p style={{fontSize:"30px",fontStyle:"italic"}}><b>WE CARE FOR YOUR HEALTH !!! <br></br> THE BEST HOSPITAL IN THE TOWN IS GLAD TO SERVE YOU </b></p>
//                     </div>
                    
//                 </div>
//             </div>
//             </div>    
//         </header>
    
    
//         {/*body of the page*/}
    
//     <body>
    
//     <div class="row justify-content-center">
//     <h1 style={{fontSize:"48px",color:"brown"}}><b>LOGIN TO YOUR ACCOUNT</b></h1>
    
//     </div>
    
//             <div className="container col-6 col-sm-4">
//                     <form onSubmit={this.onSubmit}>
//                         <div className="form-group">
//                             <label>Cnic</label>
//                             <input type="number" placeholder="enter your cnic" name="cnic" value={this.state.cnic} autoComplete="off" onChange={this.onChangeCnic} className="form-control" />
//                         </div>
//                         <div className="form-group">
//                             <label>Password</label>
//                             <input type="password" placeholder="enter your password" name="password" value={this.state.password} autoComplete="off" onChange={this.onChangePassword} className="form-control" />
//                         </div>
                       
//                         {/* checkbox for classification */}
//                             <legend>PATIENT OR DOCTOR ??</legend>
//                             {/*//for doctor*/}
//                             <div classname="Field">
//                             <label>
//                             <input type="radio" name="classification" value="doctor" onChange={this.onChangeClassificationDoctor} checked={this.state.classification === "doctor"}/>
//                             <span>Doctor</span>
//                             </label>
//                             </div>
//                             {/*//for patient*/}
//                             <div classname="Field">
//                             <label>
//                             <input type="radio" name="classification" value="patient" onChange={this.onChangeClassificationPatient} checked={this.state.classification === "patient"}/>
//                             <span>Patient</span>
//                             </label>
//                             </div>
    
//                         <button type="submit" class="btn btn-success btn-block">Submit</button>
//                     </form>
//                     </div>
    
    
//                     <br></br>
//                      <br></br>
//                     <br></br>
//                     <br></br>
    
    
//     </body>
    
//         {/*footer of the page*/}
    
//                     <footer class="jumbotron">
//                     <div class="container2">
//                 <div class="row">             
//                     <div class="col-4 offset-1 col-sm-2">
                        
//                         <h5>Links</h5>
    
//                         {/*routing*/}
//                         <ul class="list-unstyled">
                            
                           
//                             <li><Link to='/home'>Home</Link></li>
//                             <li><Link to='/aboutus'>About Us</Link></li>
//                             <li><Link to='/FormComponent'>Sign Up</Link></li>
//                             <li><Link to='/Login'>Login</Link></li>
                        
                        
//                         </ul>
    
//                     </div>
//                     <div class="col-7 col-sm-5">
//                         <h5>Our Address</h5>
//                         <p>
//                           121, Clear Water Bay Road<br></br>
//                           Shahrah-e-Faisal, Karachi,<br></br>
//                           PAKISTAN<br></br>
//                             <i class="fa fa-phone fa-lg"></i>: +92 1234 5678<br></br>
//                             <i class="fa fa-fax fa-lg"></i>: +92 8765 4321<br></br>
//                             <i class="fa fa-envelope fa-lg"></i>:
//                             <a href="mailto:confusion@food.net">nationalhospital@hotmail.com</a>
//                        </p>
//                     </div>
                    
//                </div>
//                <div class="row justify-content-center">             
//                     <div class="col-auto">
//                         <p>© COPYRIGHT NATIONAL HOSPITAL </p>
//                     </div>
//                </div>
//             </div>
//             </footer>
    
//              </div>
                    
     
//         );



//     }



// }

const  Login = () => {

    const [password,setPassword] = useState('')
    const [cnic,setCnic] = useState('')
    const [classification,setClassification] = useState('')
    const [userData,setuserData] = useState([])


    
    const   readPatient=()=>{

   
        debugger

        ;
             Axios.get(`http://localhost:3001/readPatient`, { params : { cnic:cnic, password:password, classification:classification }})
             .then((response) => {
                 console.log(response)
            //    setEmployeeList(response.data);
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
        e.preventDefault()
                       
        readPatient();
       
    }



useEffect(()=>{

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
    
                        <button type="submit" class="btn btn-success btn-block">Submit</button>
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