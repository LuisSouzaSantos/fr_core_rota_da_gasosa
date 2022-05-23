import './Menu.css';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import logo from '../../assets/images/rota-icone1.png'; 
import { FiLogOut } from "react-icons/fi";
import { IconContext } from "react-icons";
import { clear } from 'console';
import React from 'react';


class Menu extends React.Component<any, any> {

  clearLocalStorage(){
    localStorage.clear();
  }

  render(){
    return (
    <div className="d-flex">
     <Navbar className="menu" fixed='top' variant="dark">
     <div className='navStart'>
       <Navbar.Brand href="#home">
        <img className="menuLogo" alt="Rota Da Gasosa" src={logo} />
        <span className="menuTitle mr-auto">Rota da Gasosa</span> 
        
       </Navbar.Brand>
     </div>
     <div className="navEnd">
     <Link to={"/"}><span className="bellIcon " onClick={() => this.clearLocalStorage()}><FiLogOut color="black" /></span></Link>
     
     </div>

   </Navbar>
   </div>
  );
  }
}

export default Menu;