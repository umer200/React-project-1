import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from '../node_modules/reactstrap';
import { NavLink,Link } from 'react-router-dom';

import logo1 from './logo1.png';
import Home from './Home.js';
import FormComponent from './FormComponent.js';
import Login from './Login.js';

 class Aboutus extends Component{


    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

     

    render()
    {

        
        

        return(

            <div class="complete">

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

<header class="jumbotron">
        <div class="container">
            <div class="col-12 col-sm align-self-center">
                <img src={logo1} class="img-fluid"></img>
            </div>
            <p style={{fontSize:"30px",fontStyle:"italic"}}><b>WE CARE FOR YOUR HEALTH !!! <br></br> THE BEST HOSPITAL IN THE TOWN IS GLAD TO SERVE YOU </b></p>
                </div>
        
    </header>

<body>
    <div class="row">
     <div class="col-10 offset-2 col-sm-6" style={{backgroundColor: "lightblue", color: "white",fontSize:"30px",fontStyle:"italic"}}>
    
         <h1 style={{textAlign:'center'}}><b>OUR MISSION</b></h1><br/>
         <p><b>To realize its vision The National Hospital will:</b></p><br></br>
         <ul>
             <li>
             Focus on creating an excellence-driven, comprehensive, compassionate, free of charge, replicable healthcare system accessible to all.
             </li>
             <li>
             Be a non-profit entity, managed with the Islamic concept of WAQF and funded through donations and zakat.
             </li>
             <li>
             Adhere to ethical best practices in all aspects of its operations,
while following shariah and the law of the land.
             </li>
             <li>
             Empower its employees for their spiritual and professional growth.
             </li>
             <li>
             Enhance and build human capacities through quality education and research.
             </li>
         </ul>
    
      </div>
      </div>

</body>

{/*footer*/}

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

}


export default Aboutus;
