import React from "react";
import registerStyles from './Register.module.css';
//import logo from '../assets/images/rota-icone1.png'; 
import { Link } from "react-router-dom";


class RegisterAccount extends React.Component {
    
    render() {

        return (
            <div className={registerStyles.loginContainer}>
                <div className={registerStyles.formContainer}>

                    <div>
                        <form>
                            <input placeholder="Digite seu CPF/CNPJ..." type="text" required/>
                            <input placeholder="Digite sua senha..." type="password" required/>
                        </form>
                    </div>
                    <p className={registerStyles.recoveryPasswordText}><a>Esqueci minha senha</a></p>
                    <div >
                        <button className={registerStyles.buttonLogin}>LOGIN</button>
                    </div>
                    <p className={registerStyles.registerAccount} >Não tem conta? <Link to={"/"}>Cadastre-se</Link></p>    
                </div>    
            </div>
        )
    }
}

export default RegisterAccount;