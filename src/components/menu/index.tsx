import styles from './Menu.module.css';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import logo from '../../assets/images/rota-icone1.png'; 
import { FiBell } from "react-icons/fi";
import { IconContext } from "react-icons";

export default function Menu() {

  return (
     <Navbar className={styles.menu} fixed='top' variant="dark">
     <Container>
       <Navbar.Brand href="#home">
        <img className={styles.menuLogo} alt="Rota Da Gasosa" src={logo} />
        <span className={styles.menuTitle}>Rota da Gasosa</span> 
        <span className={styles.bellIcon} ><FiBell color="black" /></span>
        <span className={styles.circleUser} >US</span>

       </Navbar.Brand>
     </Container>
   </Navbar>
  );
}