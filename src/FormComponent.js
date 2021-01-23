import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo1 from './logo1.png';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { NavLink,Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from '../node_modules/reactstrap';

import Aboutus from './Aboutus.js';
import Home from './Home.js';
import Login from './Login.js';
import Axios from "axios";

// using ES6 modules
//import { Router, Route, Switch } from "react-router";
 


 class FormComponent extends Component{



    
      

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeCnic = this.onChangeCnic.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onChangeClassificationDoctor=this.onChangeClassificationDoctor.bind(this);
        this.onChangeClassificationPatient=this.onChangeClassificationPatient.bind(this);
        this.addPatient=this.addPatient.bind(this);
        this.validation=this.validation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.clearingStates=this.clearingStates.bind(this);
        

        
        
        
        this.state = {
            name: '',
            age: '',
            phone: '',
            address: '',
            password: '',
            classification: '',
            cnic: '',
            userData: []
        }

       
    }


    //handling post request to create an entry in database
    addPatient = () => {
        Axios.post(`http://localhost:3001/create`, {
          name: this.state.name,
          age: this.state.age,
          address: this.state.address,
          phone: this.state.phone,
          cnic: this.state.cnic,
          password: this.state.password
        }).then(res => {
            
             
              this.setState([
                ...this.state.userData,
                {
                    name: this.state.name,
                    age: this.state.age,
                    address: this.state.address,
                    phone: this.state.phone,
                    cnic: this.state.cnic,
                    password: this.state.password
                },
              ]);
              
        });
    };

    // Form Events
    onChangeName(e) {
        this.setState({ name : e.target.value })
    }


    clearingStates=()=>{
        this.setState({
            name: '',
            age: '',
            address: '',
            phone: '',
            password: '',
            classification:'',
            cnic : ''
        });
    }

    onChangeAge(e) {
        this.setState({ age : e.target.value })
    }

    onChangePhone(e) {
        this.setState({ phone : e.target.value })
    }

    onChangeAddress(e) {
        this.setState({ address : e.target.value })
    }

    onChangeCnic(e) {
        this.setState({  cnic : e.target.value })
    }

    onChangePassword(e){
        this.setState({password: e.target.value})
    }

    onChangeClassificationDoctor(e){
        this.setState({classification : e.target.value})
    }

    onChangeClassificationPatient(e){
        this.setState({classification : e.target.value})
    }

    //validating form data
     validation(name,age,phone,address,password,classification,cnic){
         const error={name,age,phone,address,password,classification,cnic};

        if(!name) error.name="Please enter your name";
        else error.name=null;
        if(!age) error.name="Please enter your age";
        else error.age=null;
        if(!address) error.address="Please enter your address";
        else error.address=null;
        if(!password) error.password="Please enter password";
        else error.password=null;
        if(!phone) error.phone="Please enter valid phone number ";
        else error.phone=null;
        if(!cnic) error.phone="Please enter valid cnic number ";
        else error.cnic=null;
        if(!classification) error.classification="Please select a checkbox from classification";
        else error.classification=null;

        return error;
    
    }

    onSubmit(e) {
        e.preventDefault()

        
        const errors=this.validation(this.state.name,this.state.age,this.state.phone,this.state.address,this.state.password,this.state.classification,this.state.cnic);
        
        
            if (errors.name!=null)
            {
            alert(errors.name)
            
            }
            else if (errors.age!=null)
            {
            alert(errors.age)
            
            }
            else if (this.state.age<0)
            alert ("Age cannot be negative")
            else if(errors.phone!=null)
            alert(errors.phone)
            else if (this.state.phone.length>12 || this.state.phone.length<12)
            alert("Phone number cannot be more than or less than 12 digits");
            else if (this.state.cnic.length>11 || this.state.cnic.length<11)
            alert("CNIC number should be 11 digits without dashes");
            else if (errors.address!=null)
            alert(errors.address)
            else if(errors.password!=null)
            alert(errors.password)
            else if (errors.classification!=null)
            alert(errors.classification)  
            else
            { 
            alert("Your form is submitted")
            if(this.state.classification=="patient")
            {
            this.addPatient();
            
            

            }


            

        }


               
        
        
       

        
    }

    // React Life Cycle
    componentDidMount() {
        
  
            this.setState({
                name: '',
                age: '',
                address: '',
                phone: '',
                password: '',
                classification: '',
                cnic : ''
            })
        
    
    }




render()
{

        

    return(
        

        

        

       
        //complete container with header, body and footer
        <div classname="Compelete"> 


<Navbar bg="dark" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src={logo1} height="30" width="41" alt='National Hospital' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
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
<h1 style={{fontSize:"48px",color:"brown"}}><b>REGISTRATION FORM </b></h1>

</div>

        <div className="container col-6 col-sm-4">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="enter your name" name="name" value={this.state.name} autoComplete="off" onChange={this.onChangeName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="number" placeholder="enter your age" name="age" value={this.state.age} autoComplete="off" onChange={this.onChangeAge} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" placeholder="enter your address" name="address" value={this.state.address} autoComplete="off" onChange={this.onChangeAddress} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="number" placeholder="enter your phone number (12 digits) eg.92xxxxxxxxxx" name="phone" value={this.state.phone} autoComplete="off" onChange={this.onChangePhone} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Cnic</label>
                        <input type="number" placeholder="enter your cnic" name="cnic" value={this.state.cnic} autoComplete="off" onChange={this.onChangeCnic} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="enter your password" name="password" value={this.state.password} autoComplete="off" onChange={this.onChangePassword} className="form-control" />
                    </div>
                   
                    {/* checkbox for classification */}
                        <legend>PATIENT OR DOCTOR ??</legend>
                        {/*//for doctor*/}
                        <div classname="Field">
                        <label>
                        <input type="radio" name="classification" value="doctor" onChange={this.onChangeClassificationDoctor} checked={this.state.classification === "doctor"}/>
                        <span>Doctor</span>
                        </label>
                        </div>
                        {/*//for patient*/}
                        <div classname="Field">
                        <label>
                        <input type="radio" name="classification" value="patient" onChange={this.onChangeClassificationPatient} checked={this.state.classification === "patient"}/>
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

}

export default FormComponent;