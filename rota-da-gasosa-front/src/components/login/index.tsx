import React from "react";
import loginStyles from './Login.module.css';
import logo from '../../assets/images/rota-icone1.png'; 
import { Link } from "react-router-dom";


class Login extends React.Component {
    
    render() {

        return (
            <div className={loginStyles.loginContainer}>
                <div className={ loginStyles.formContainer}>
                    <div className={loginStyles.logoContainer} >
                        <img className={loginStyles.logo} alt="Rota Da Gasosa" src={logo} /> <span className={loginStyles.logoText} >Rota Da Gasosa</span> 
                    </div>
                    <div >
                        <form>
                            <input placeholder="Digite seu CPF/CNPJ..." type="text" required/>
                            <input placeholder="Digite sua senha..." type="password" required/>
                        </form>
                    </div>
                    <p className={loginStyles.recoveryPasswordText}><a>Esqueci minha senha</a></p>
                    <div >
                        <button className={loginStyles.buttonLogin}>LOGIN</button>
                    </div>
                    <p className={loginStyles.registerAccount} >Não tem conta? <Link to={"/registerAccount"}>Cadastre-se</Link></p>    
                </div>    
            </div>
        )
    }
}

export default Login;