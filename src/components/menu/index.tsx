import './Menu.css';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import logo from '../../assets/images/rota-icone1.png'; 
import { FiLogOut } from "react-icons/fi";
import { IconContext } from "react-icons";


export default function Menu() {

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
     <span className="bellIcon " ><FiLogOut color="black" /></span>
     
     </div>

   </Navbar>
   </div>
  );
}